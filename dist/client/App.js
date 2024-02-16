"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Table_1 = __importDefault(require("./components/table/Table"));
const App = () => {
    const [tracks, setTracks] = (0, react_1.useState)();
    const [genres, setGenres] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        fetch("http://localhost:3000/tracks")
            .then((res) => res.json())
            .then((json) => setTracks(json))
            .catch((e) => console.log(e));
        // fetch genres and setGenres here
        fetch('http://localhost:3000/genres')
            .then((res) => res.json())
            .then((json) => setGenres(json))
            .catch((e) => console.log(e));
    }, []);
    const handleSort = (column, direction) => {
        fetch(`http://localhost:3000/sort?column=${column}&direction=${direction}`)
            .then((res) => res.json())
            .then((json) => setTracks(json))
            .catch((e) => console.log(e));
    };
    const handleTestClick = function () {
        console.table(tracks);
        console.table(genres);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "DJ Database" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleTestClick, children: "TEST" }), tracks && (0, jsx_runtime_1.jsx)(Table_1.default, { tracks: tracks, handleSort: handleSort })] }));
};
exports.default = App;
