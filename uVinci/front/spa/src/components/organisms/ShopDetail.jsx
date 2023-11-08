// lib
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, Link, Typography, Button} from "@material-ui/core";
import statusCodes from "../../constants/statusCodes";

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
  const [isComento, setIsComento] = useState(false);

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
    if (status !== statusCodes.OK) {
      alert(
        "表示できません。何度も失敗する際は、管理者にお問い合わせください。"
      );
    }

    const user = authStub.getUser.name;
    const isAlreadyComento = (comento) => comento.name === user;
    setIsComento(comentoes.some(isAlreadyComento));

  }, [detailedShopId]);

  const handleLike = () => {
    const option = {
      header: { token: authStub.getToken() },
      body: { user: authStub.getUser() },
    };


    if(isComento){
      setLatestComentoes(latestComentoes.filter(s => s.name !== option.body.user.name));
      setIsComento(false);
    }else{

      const { result: { comentoes: updatedComentoes } = {} } = uVinciAPIStub.post(
        `http://${process.env.REACT_APP_API_HOSTNAME}/${
          CONSTS.RESTAURANTS_PATHNAME
        }/${detailedShopId ?? ""}/${CONSTS.LIKE_PATHNAME}`,
        option
      );

      setLatestComentoes(updatedComentoes);
      setIsComento(true)
    }
  };

  const closeShopDetail = () => {
    setDetailedShopId(null);
  }

  return (
    <Drawer
      anchor={anchor}
      id="shop-detail-drawer"
      open={detailedShopId != null && shopName != null}
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
          <ComentoesList handleLike={handleLike} comentoes={latestComentoes} isComento={isComento}/>
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
