"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = require("./middlewares");
const logger_1 = require("./utils/logger");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.use("/api", routes_1.default);
app.get("/api/health", (_req, res) => {
    res.json({ success: true, message: "VisionX API is running" });
});
app.use(middlewares_1.errorHandler);
app.listen(PORT, () => {
    logger_1.logger.info(`VisionX API server running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map