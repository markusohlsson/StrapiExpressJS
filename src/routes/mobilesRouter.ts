import express from "express";
import { mobilesController } from "../controllers/mobilesController";
import { CMSClient } from "../clients/cms_client";

const client = new CMSClient();
const controller = new mobilesController(client);

const mobilesRouter = express.Router();

mobilesRouter
  .get("/", controller.getMobiles.bind(controller))
  .get("/:id", controller.getMobile.bind(controller))
  .delete("/:id", controller.deleteMobile.bind(controller))
  .post("/", controller.addMobile.bind(controller))
  .put("/:id", controller.updateMobile.bind(controller));

export default mobilesRouter;
