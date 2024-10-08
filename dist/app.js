"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./app/routes/index"));
const error_1 = __importDefault(require("./app/middlewares/error"));
const not_found_1 = require("./app/middlewares/not-found");
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/api", index_1.default);
app.get("/", (req, res) => {
    res.send("Welcome To AutoSpa");
});
// 404 Handler
app.use(not_found_1.notFound);
app.use(error_1.default);
exports.default = app;
