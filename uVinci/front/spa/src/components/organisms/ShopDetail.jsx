// lib
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Box, Divider, Drawer, Link, Typography, Button } from "@material-ui/core";

// consts
import CONSTS from "../../constants/consts";

// components
import ComentoesList from "../molecules/ComentoesList";

// stub
import uVinciAPIStub from "../../stub/uVinciAPIStub";
import authStub from "../../stub/authStub";

const ShopDetail = ({ detailedShopId, setDetailedShopId }) => {
  const anchor = "right";

  const [latestComentoes, setLatestComentoes] = useState([]);
  const [shopName, setShopName] = useState();
  const [shopAccess, setShopAccess] = useState();
  const [shopUrl, setShopUrl] = useState();
  const [shopTagline, setShopTagline] = useState();

  useEffect(() => {
    const {
      result: { name, access, url, comentoes, catch: tagline } = {},
      status,
    } = uVinciAPIStub.get(
      `http://${process.env.REACT_APP_API_HOSTNAME}/${
        CONSTS.RESTAURANTS_PATHNAME
      }/${detailedShopId ?? ""}`
    );
    setLatestComentoes(comentoes);
    setShopName(name);
    setShopAccess(access);
    setShopUrl(url);
    setShopTagline(tagline);

    console.log({ status });
  }, [detailedShopId]);

  const handleLike = () => {
    const option = {
      header: { token: authStub.getToken() },
      body: { user: authStub.getUser() },
    };

    const { result: { comentoes: updatedComentoes } = {} } = uVinciAPIStub.post(
      `http://${process.env.REACT_APP_API_HOSTNAME}/${
        CONSTS.RESTAURANTS_PATHNAME
      }/${detailedShopId ?? ""}/${CONSTS.LIKE_PATHNAME}`,
      option
    );

    setLatestComentoes(updatedComentoes);
  };

  const closeShopDetail = () => {
    setDetailedShopId(null);
  }

  return (
    <Drawer
      anchor={anchor}
      id="shop-detail-drawer"
      open={detailedShopId != null}
      onClose={() => setDetailedShopId(null)}
    >
      <Box p={CONSTS.DEFAULT_SPACE}>
        <Box margin={1} textAlign="right">
          <Button variant="contained" size="small" onClick={closeShopDetail}>閉じる</Button>
        </Box>

        <Box mb={CONSTS.DEFAULT_SPACE}>
          <Typography variant="h3">{shopName}</Typography>
          <Typography variant="subtitle1">{shopTagline}</Typography>
          <Typography variant="caption">{shopAccess}</Typography>
          <Link display="block" href={shopUrl} target="_blank" rel="noopener">
            {shopUrl}
          </Link>
        </Box>

        <Box my={CONSTS.DEFAULT_SPACE}>
          <Divider />
        </Box>

        <Box>
          <ComentoesList handleLike={handleLike} comentoes={latestComentoes} />
        </Box>
      </Box>
    </Drawer>
  );
};

ShopDetail.propTypes = {
  detailedShopId: PropTypes.string,
  setDetailedShopId: PropTypes.func.isRequired,
};

ShopDetail.defaultProps = {
  detailedShopId: null,
};

export default ShopDetail;
