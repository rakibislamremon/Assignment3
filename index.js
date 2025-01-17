import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import ratelimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import mongoose from "mongoose";
import router from "./routes/api.js";
import { PORT } from "./app/config/config.js";

const app = express();

// Global Application Middleware
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());

const limiter = ratelimit({ windowMs: 5 * 60 * 1000, max: 500 });

app.use(limiter);

// Web Caching
app.set("etag", false);

// MongoDb
mongoose
  .connect("mongodb://localhost:27017/", { autoIndex: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database Connection Error: " + err);
  });

app.use(router);

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
