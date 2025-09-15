import express from "express";
import connectDB from "./utils/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import postRouter from "./router/post/postRouter.js";
import userRouter from "./router/user/userRouter.js";
import passport from "./utils/passport-config.js";
import cookieParser from "cookie-parser";
import categoryRouter from "./router/category/categoryRouter.js";
import notificationRouter from "./router/notification/notificationRouter.js";
import commentRouter from "./router/comments/commentRouter.js";
import geminiRouter from "./router/geminiapi/geminiRouter.js";
import studentRouter from "./router/student/studentRouter.js";

import statsRouter from "./router/misc/statscountRouter.js";

dotenv.config();

const app = express();

//* Connect to the DB
connectDB();

//* Middlewares
//* CORS
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

//* Cookie Parser
app.use(cookieParser());

//* Passport
app.use(passport.initialize());

//* PORT
const PORT = process.env.PORT || 5000;

//* CORS
app.use(cors(corsOptions));

//* Middlewares
app.use(express.json());

//* Route Handlers
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/notifications", notificationRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/ai", geminiRouter);
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/count", statsRouter);

//* Not Found Route
app.use((req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

//* Error Handling Middleware
app.use((err, req, res, next) => {
  const message = err.message || "Internal Server Error";
  const status = err.status || 500;
  const stack = err.stack || "";
  res.status(status).json({
    status: "error",
    message: message,
    stack,
  });
});

//* Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
