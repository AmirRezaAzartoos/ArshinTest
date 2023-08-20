import { Router } from "express";
const itemRouter = Router();
import {
  createItem,
  updateItem,
  getAllItems,
} from "../controllers/item.controller.js";

// Item creation
itemRouter.get("/", getAllItems);
itemRouter.post("/", createItem);
itemRouter.post("/:id", updateItem);

export default itemRouter;
