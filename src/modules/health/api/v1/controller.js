import express from "express";
import { tracedAsyncHandler } from "@sliit-foss/functions";
import { response } from "../../../../utils/response"

const health = express.Router();

health.get(
  "/",
  tracedAsyncHandler((req, res) => {
    return response({ res, message: "Hello World RTC!" });
  })
);

export default health;
