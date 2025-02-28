import { Router } from "express";
import { healcheck } from "../controllers/healthcheck.controller.js";


const router =Router();


router.route("/").get(healcheck)

export default router