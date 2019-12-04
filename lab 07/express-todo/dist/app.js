"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/todo", (req, res, next) => {
    res.send("Hello Express.ts!!!!");
});
app.listen(3000, () => {
    console.log("Server started at port 3000!");
});
