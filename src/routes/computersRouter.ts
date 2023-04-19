import express from "express";
import { CMSClient } from "../clients/cms_client";
import { computersController } from "../controllers/computersController";

const client = new CMSClient();
const controller = new computersController(client);

const computersRouter = express.Router();

computersRouter
  .get("/", controller.getComputers.bind(controller))
  .get("/:id", controller.getComputer.bind(controller))
  .delete("/:id", controller.deleteComputer.bind(controller))
  .post("/", controller.addComputer.bind(controller))
  .put("/:id", controller.updateComputer.bind(controller));

export default computersRouter;
