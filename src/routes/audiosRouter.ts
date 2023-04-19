import express from "express";
import { CMSClient } from "../clients/cms_client";
import { audiosController } from "../controllers/audiosController";

const client = new CMSClient();
const controller = new audiosController(client);

const audiosRouter = express.Router();

audiosRouter
  .get("/", controller.getAudios.bind(controller))
  .get("/:id", controller.getAudio.bind(controller))
  .delete("/:id", controller.deleteAudio.bind(controller))
  .post("/", controller.addAudio.bind(controller))
  .put("/:id", controller.updateAudio.bind(controller));
export default audiosRouter;
