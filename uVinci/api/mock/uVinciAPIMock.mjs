import axios from "axios";
import cors from "cors";

import express from "express";
import messages from "../constants/messages.mjs";
import statusCodes from "../constants/statusCodes.mjs";
import putComentoesMock from "./services/getAndPutService.mjs";

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

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

app.get("/restaurants", (req, res) => {
  const { id } = req.query ? req.query : "";

  if (id) {
    if (id === fakeInternalServerError.id) {
      res.send(internalServerError);

      return;
    }

    if (id.slice(-1) === "7") {
      res.send(requestTimeout);

      return;
    }

    try {
      axios.get(`http://localhost:3000/restaurants/${id}`).then((contents) => {
        const result = contents.data;

        res.send({
          result,
          messages: messages.OK,
          status: statusCodes.OK,
        });
      });

      return;
    } catch {
      res.send(dataNotFound);
    }
  }

  try {
    axios.get(`http://localhost:3000/restaurantLocation`).then((contents) => {
      const listForTheFunction = contents.data;
      res.send({
        result: [...listForTheFunction, fakeInternalServerError],
        messages: messages.OK,
        status: statusCodes.OK,
      });
    });
  } catch {
    res.send(dataNotFound);
  }
});

app.put("/restaurants/:detailedShopId/like", async function (req, res) {
  try {
    const authenticationUser = req.body.user;
    const authenticationToken = req.headers.token;
    const like = true;

    if (authenticationToken == null || authenticationUser == null) {
      throw new Error("bad request!");
    }

    const [functionName, id] = getParams(req);
    const mockResponse = await putComentoesMock({
      functionName,
      id,
      authenticationUser,
      like,
    });

    res.send(mockResponse);
  } catch {
    res.send(badRequest);
  }
});

app.delete("/restaurants/:detailedShopId/unlike", async function (req, res) {
  try {
    const authenticationUser = req.body.user;
    const authenticationToken = req.headers.token;
    const like = false;

    if (authenticationToken == null || authenticationUser == null) {
      throw new Error("bad request!");
    }

    const [functionName, id] = getParams(req);
    const mockResponse = await putComentoesMock({
      functionName,
      id,
      authenticationUser,
      like,
    });

    res.send(mockResponse);
  } catch {
    res.send(badRequest);
  }
});

const getParams = (req) => ["restaurants", req.params.detailedShopId];
