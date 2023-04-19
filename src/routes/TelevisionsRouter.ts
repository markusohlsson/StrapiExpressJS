import express from "express";
import { televisionsController } from "../controllers/televisionsController";
import { CMSClient } from "../clients/cms_client";

const client = new CMSClient();
const controller = new televisionsController(client);

const televisionsRouter = express.Router();

televisionsRouter
  .get("/", controller.getTelevisions.bind(controller))
  .get("/:id", controller.getTelevision.bind(controller))
  .delete("/:id", controller.deleteTelevision.bind(controller))
  .post("/", controller.addTelevision.bind(controller))
  .put("/:id", controller.updateTelevision.bind(controller));

export default televisionsRouter;
