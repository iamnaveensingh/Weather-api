import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import morgan from "morgan";
import { rateLimiter } from "./middleware/rateLimitMiddleware.js";
import logger from "./middleware/logger.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(morgan("combined"));
app.use("/api", rateLimiter, routes);
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

export default app;
