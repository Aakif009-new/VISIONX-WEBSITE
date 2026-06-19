"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUploadController = exports.AdminUploadController = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, path_1.default.join(__dirname, "../../uploads"));
    },
    filename: (_req, file, cb) => {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, unique + path_1.default.extname(file.originalname));
    },
});
exports.upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
        const allowed = /jpeg|jpg|png|gif|webp|svg/;
        const ext = allowed.test(path_1.default.extname(file.originalname).toLowerCase());
        if (ext)
            cb(null, true);
        else
            cb(new Error("Only image files are allowed"));
    },
});
class AdminUploadController {
    async uploadFile(req, res, _next) {
        if (!req.file) {
            res.status(400).json({ success: false, message: "No file uploaded" });
            return;
        }
        const url = `/uploads/${req.file.filename}`;
        res.json({ success: true, data: { url, filename: req.file.filename } });
    }
}
exports.AdminUploadController = AdminUploadController;
exports.adminUploadController = new AdminUploadController();
//# sourceMappingURL=admin-upload.controller.js.map