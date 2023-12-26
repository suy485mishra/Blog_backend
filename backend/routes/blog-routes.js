import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getByUserId, getbyId, updateBlog } from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog );
blogRouter.put("/updateBlog/:id", updateBlog);
blogRouter.get("/:id", getbyId );
blogRouter.delete("/:id", deleteBlog);
blogRouter.get('/user/:id', getByUserId)


export default blogRouter;
