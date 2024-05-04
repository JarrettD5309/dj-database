"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
const GenreButtons = ({ genres, handleGenreClick }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: genres.map((genre) => ((0, jsx_runtime_1.jsx)("button", { className: "genre-button", onClick: () => handleGenreClick(genre), children: genre }, genre))) }));
};
exports.default = GenreButtons;
