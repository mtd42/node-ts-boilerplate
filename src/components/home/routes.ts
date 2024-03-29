import { Router } from "express";
import { getHome } from "./services";

const router = Router();

router.get("/", getHome);

export default router;
