"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const record_mocks_1 = require("../mocks/record-mocks");
const types_1 = require("../shared/types");
const PORT = 3000;
const app = (0, express_1.default)();
app.get('/tracks', (req, res) => {
    res.json(record_mocks_1.trackCollection);
});
app.get('/sort', (req, res) => {
    const sortColumn = req.query.column;
    const sortDirection = req.query.direction;
    let sortedRes = [];
    if (sortColumn === types_1.DJColumn.Artist || sortColumn === types_1.DJColumn.SongTitle) {
        if (sortDirection === types_1.Direction.Acsend) {
            sortedRes = [...record_mocks_1.trackCollection].sort((a, b) => a[sortColumn].localeCompare(b[sortColumn], 'en', { 'sensitivity': 'base' }));
        }
        else {
            sortedRes = [...record_mocks_1.trackCollection].sort((a, b) => b[sortColumn].localeCompare(a[sortColumn], 'en', { 'sensitivity': 'base' }));
        }
    }
    else if (sortColumn === types_1.DJColumn.BPM) {
        if (sortDirection === types_1.Direction.Acsend) {
            sortedRes = [...record_mocks_1.trackCollection].sort((a, b) => a.bpm - b.bpm);
        }
        else {
            sortedRes = [...record_mocks_1.trackCollection].sort((a, b) => b.bpm - a.bpm);
        }
    }
    res.json(sortedRes);
});
app.get('/genres', (req, res) => {
    const genresArr = [];
    record_mocks_1.trackCollection.forEach((element) => genresArr.push(element.genres));
    const uniqueGenreArr = genresArr.flat()
        .filter((genreElement, i, array) => array.indexOf(genreElement) === i);
    res.json(uniqueGenreArr);
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
