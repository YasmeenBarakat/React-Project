import express from "express";
const router = express.Router();
import { test } from "../controllers/post.controller.js";
router.post("/create", test);

export default router;
