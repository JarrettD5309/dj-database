"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Table_1 = __importDefault(require("./components/table/Table"));
const GenreButtons_1 = __importDefault(require("./components/genre-buttons/GenreButtons"));
require("./style.css");
const App = () => {
    const [tracks, setTracks] = (0, react_1.useState)();
    const [genres, setGenres] = (0, react_1.useState)([]);
    const [currentGenre, setCurrentGenre] = (0, react_1.useState)('');
    const URL = 'http://localhost:3000';
    (0, react_1.useEffect)(() => {
        fetchTracks();
        fetch(`${URL}/genres`)
            .then((res) => res.json())
            .then((json) => setGenres(json))
            .catch((e) => console.log(e));
    }, []);
    const fetchTracks = () => {
        fetch(`${URL}/tracks`)
            .then((res) => res.json())
            .then((json) => setTracks(json))
            .catch((e) => console.log(e));
    };
    const handleGenreSearch = (genre) => {
        fetch(`${URL}/search?genre=${genre}`)
            .then((res) => res.json())
            .then((json) => setTracks(json))
            .catch((e) => console.log(e));
    };
    const handleGenreClick = (genre) => {
        handleGenreSearch(genre);
        setCurrentGenre(genre);
    };
    const handleSort = (column, direction) => {
        fetch(`${URL}/sort?column=${column}&direction=${direction}&genre=${currentGenre}`)
            .then((res) => res.json())
            .then((json) => setTracks(json))
            .catch((e) => console.log(e));
    };
    const handleTestClick = function () {
        // fetchTracks();
        console.table(tracks);
        console.log(genres);
        console.log('currentGenre', currentGenre);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "DJ Database" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleTestClick, children: "TEST" }), (0, jsx_runtime_1.jsx)(GenreButtons_1.default, { genres: genres, handleGenreClick: handleGenreClick }), tracks && (0, jsx_runtime_1.jsx)(Table_1.default, { tracks: tracks, handleSort: handleSort })] }));
};
exports.default = App;
