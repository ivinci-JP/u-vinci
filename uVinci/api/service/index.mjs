import axios from "axios";
import messages from "../constants/messages.mjs";
import statusCodes from "../constants/statusCodes.mjs";

const getShopDetails = (filePath) =>
  axios.get(filePath).then((contents) => {
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

const updateComentoes = (filePath, shopDetails) =>
  axios.put(filePath, shopDetails).then((contents) => {
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
    const filePath = `http://localhost:3000/${functionName}/${id}`;

    const shopDetails = await getShopDetails(filePath);

    const enableLike = isEnableLike(shopDetails, authenticationUser);
    if (like && enableLike) {
      addComentoes(shopDetails, authenticationUser);
    }
    const result = await updateComentoes(filePath, shopDetails);

    return result;
  } catch {
    return internalServerError;
  }
};

export default putComentoesMock;
