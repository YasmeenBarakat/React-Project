import { errorHandler } from "../utils/error.js";
import post from "../models/post.model.js";

export const test = async (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "please provide all required fields "));
  }
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "-");
  const newpost = new post({
    ...req.body,
    slug,
  });
  try {
    const savedPost = await newpost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};
