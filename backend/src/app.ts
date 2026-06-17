import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";
import { errorHandler } from "./middlewares";
import { logger } from "./utils/logger";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api", routes);

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "VisionX API is running" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`VisionX API server running on port ${PORT}`);
});

export default app;
