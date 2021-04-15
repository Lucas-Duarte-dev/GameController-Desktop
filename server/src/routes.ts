import { Router } from "express";
import CpuController from "./controllers/CpuController";

const route = Router();

route.get("/", CpuController.ram);

export default route;
