import express from "express";
import { Signin, signup, google } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", Signin);
router.post("google", google);
export default router;
