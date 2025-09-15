import express from "express";
import User from "../../models/User/User.model.js"; 
import Post from "../../models/Post/Post.model.js"; 

const statsRouter = express.Router();

statsRouter.get("/counts", async (req, res) => {
  try {
    const studentsCount = await User.countDocuments();
    const postsCount = await Post.countDocuments();

    res.json({
      students: studentsCount,
      posts: postsCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default statsRouter;
