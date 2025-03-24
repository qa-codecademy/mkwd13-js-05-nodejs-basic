import { Router } from "express";
import EventController from "../controllers/event.controller.js";

const eventRouter = Router();
const eventController = new EventController();

eventRouter.get("/", (req, res) => eventController.getAll(req, res));
eventRouter.post("/", (req, res) => eventController.create(req, res));
eventRouter.delete("/:id", (req, res) => eventController.delete(req, res));

export default eventRouter;
