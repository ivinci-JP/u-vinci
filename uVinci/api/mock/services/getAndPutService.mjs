import axios from "axios";
import messages from "../../constants/messages.mjs";
import statusCodes from "../../constants/statusCodes.mjs";

const getShopDetails = (requestPath) =>
  axios.get(requestPath).then((contents) => {
    const result = contents.data;
    return result;
  });

const isEnableLike = (shopDetails, authenticationUser) =>
  !shopDetails.comentoes.some(
    (user) => JSON.stringify(user) === JSON.stringify(authenticationUser)
  );

const addComentoes = (shopDetails, authenticationUser) => {
  shopDetails.comentoes.push(authenticationUser);
};

const updateComentoes = (requestPath, shopDetails) =>
  axios.put(requestPath, shopDetails).then((contents) => {
    return {
      result: contents.data,
      messages: messages.OK,
      status: statusCodes.OK,
    };
  });

const putComentoesMock = async ({
  functionName,
  id,
  authenticationUser,
  like,
}) => {
  if (!like) {
    return badRequest;
  }
  try {
    const requestPath = `http://localhost:3000/${functionName}/${id}`;

    const shopDetails = await getShopDetails(requestPath);

    const enableLike = isEnableLike(shopDetails, authenticationUser);
    if (like && enableLike) {
      addComentoes(shopDetails, authenticationUser);
    }
    const result = await updateComentoes(requestPath, shopDetails);

    return result;
  } catch {
    return internalServerError;
  }
};

export default putComentoesMock;
