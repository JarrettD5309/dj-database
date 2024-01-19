"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
const Table = ({ records }) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: records.map((item, i) => (0, jsx_runtime_1.jsx)(TableItem, { item: item }, i)) }));
const TableItem = ({ item }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "grid-container", children: [(0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.artist }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.songTitle }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.bpm }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.position }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.rpm })] }));
};
exports.default = Table;
