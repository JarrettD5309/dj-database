"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const record_mocks_1 = require("../mocks/record-mocks");
const PORT = 3000;
const app = (0, express_1.default)();
app.get('/records', (req, res) => {
    res.json(record_mocks_1.recordCollection);
});
app.use(express_1.default.static(path_1.default.join(__dirname, '../../public'), { index: false }));
app.get('*', (req, res, next) => {
    try {
        res.sendFile(path_1.default.join(__dirname, '../../public/index.html'));
    }
    catch (e) {
        next(e);
    }
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
