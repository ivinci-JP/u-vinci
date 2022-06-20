import messages from "../constants/messages";
import statusCodes from "../constants/statusCodes";

const dataNotFound = {
  result: [],
  message: messages.NO_CONTENT,
  status: statusCodes.NO_CONTENT,
};

const badRequest = {
  result: {},
  message: messages.BAD_REQUEST,
  status: statusCodes.BAD_REQUEST,
};

const requestTimeout = {
  result: {},
  message: messages.REQUEST_TIMEOUT,
  status: statusCodes.REQUEST_TIMEOUT,
};

const internalServerError = {
  result: {},
  message: messages.INTERNAL_SERVER_ERROR,
  status: statusCodes.INTERNAL_SERVER_ERROR,
};

const fakeInternalServerError = {
  id: "iVinciSince2012",
  lat: 35.692973,
  lng: 139.761738,
};

const getStub = (functionName, id) => {
  if (id) {
    if (id === fakeInternalServerError.id) {
      return internalServerError;
    }

    if (id.slice(-1) === "7") {
      return requestTimeout;
    }

    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const detailedInformation = require(`./${functionName}/${id}.json`);

      return {
        result: detailedInformation,
        messages: messages.OK,
        status: statusCodes.OK,
      };
    } catch {
      return dataNotFound;
    }
  }

  try {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const listForTheFunction = require(`./${functionName}.json`);

    return {
      result: [...listForTheFunction, fakeInternalServerError],
      messages: messages.OK,
      status: statusCodes.OK,
    };
  } catch {
    return dataNotFound;
  }
};

const postStub = ({ functionName, id, options, user, like }) => {
  if (options[0] === "like") {
    try {
      const filePath = `./${functionName}/${id}.json`;
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const detailedInformation = require(`${filePath}`);

      const newComentoes = like
        ? [...detailedInformation.comentoes, user]
        : detailedInformation.comentoes;
      const result = {
        ...detailedInformation,
        comentoes: newComentoes,
      };

      return {
        result,
        messages: messages.OK,
        status: statusCodes.OK,
      };
    } catch {
      return internalServerError;
    }
  }

  return badRequest;
};

const getParams = (urlString) => {
  const { pathname } = new URL(urlString);

  return pathname.split("/").slice(1);
};

const get = (urlString) => {
  const [functionName, id] = getParams(urlString);
  const stubResponse = getStub(functionName, id);

  return stubResponse;
};

const post = (urlString, option) => {
  try {
    const {
      header: { token },
      body: { user, like = true },
    } = option;

    if (token == null || user == null) {
      throw new Error("bad request!");
    }

    const [functionName, id, ...options] = getParams(urlString);
    const stubResponse = postStub({ functionName, id, options, user, like });

    return stubResponse;
  } catch {
    return badRequest;
  }
};

const uVinciAPIStub = {
  get,
  post,
};

export default uVinciAPIStub;
