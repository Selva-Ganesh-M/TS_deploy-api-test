"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.get("/", (req, res) => {
    res.status(200).json("server is here");
});
const port = process.env.PORT || 8000;
server.listen(port, () => console.log("server started listening at port:", port));
