"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./style.css");
const types_1 = require("../../../shared/types");
const Table = ({ tracks, handleSort }) => ((0, jsx_runtime_1.jsxs)("div", { className: "grid-container", children: [(0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid-item tr", children: ["Artist \u00A0", (0, jsx_runtime_1.jsx)("span", { className: "click-hand", onClick: () => handleSort(types_1.DJColumn.Artist, types_1.Direction.Ascend), children: "\u25B2" }), "\u00A0", (0, jsx_runtime_1.jsx)("span", { className: "click-hand", onClick: () => handleSort(types_1.DJColumn.Artist, types_1.Direction.Descend), children: "\u25BC" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid-item tr", children: ["Title \u00A0", (0, jsx_runtime_1.jsx)("span", { className: "click-hand", onClick: () => handleSort(types_1.DJColumn.SongTitle, types_1.Direction.Ascend), children: "\u25B2" }), "\u00A0", (0, jsx_runtime_1.jsx)("span", { className: "click-hand", onClick: () => handleSort(types_1.DJColumn.SongTitle, types_1.Direction.Descend), children: "\u25BC" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid-item tr", children: ["BPM \u00A0", (0, jsx_runtime_1.jsx)("span", { className: "click-hand", onClick: () => handleSort(types_1.DJColumn.BPM, types_1.Direction.Ascend), children: "\u25B2" }), "\u00A0", (0, jsx_runtime_1.jsx)("span", { className: "click-hand", onClick: () => handleSort(types_1.DJColumn.BPM, types_1.Direction.Descend), children: "\u25BC" })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item tr", children: "Position" }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item tr", children: "RPM" }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item tr", children: "Details" })] }), tracks.map((item, i) => (0, jsx_runtime_1.jsx)(TableItem, { item: item }, i))] }));
const TableItem = ({ item }) => {
    const [isDetailOpen, setIsDetailOpen] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setIsDetailOpen(false);
    }, [item]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.artist }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.songTitle }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.bpm }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.position }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: item.rpm }), (0, jsx_runtime_1.jsx)("div", { className: "grid-item", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setIsDetailOpen(!isDetailOpen), children: isDetailOpen ? 'Close' : 'Open' }) }), isDetailOpen && ((0, jsx_runtime_1.jsxs)("div", { className: "grid-item details", style: { gridColumn: '1 / -1' }, children: [(0, jsx_runtime_1.jsx)("div", { className: "details-art", children: (0, jsx_runtime_1.jsx)("img", { src: "https://i.discogs.com/-cRDCtkYHWq6Fz8FUmZjhBWabtESAg05AGDLVf0bjlI/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIwODUt/MTQ5Nzc4MjEzMi05/MTk0LnBuZw.jpeg", alt: "album art", height: "150", width: "150" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "details-list", children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Artist: ", item.artist] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Song: ", item.songTitle] }), (0, jsx_runtime_1.jsxs)("p", { children: ["BPM: ", item.bpm] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Position: ", item.position] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Speed: ", item.rpm] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Genre: ", item.genres.join(', ')] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Release: ", item.release] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Year: ", item.year] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Discogs: ", (0, jsx_runtime_1.jsx)("a", { href: item.discogsLink, target: '_blank', rel: "noreferrer", children: item.discogsLink })] })] })] }))] }));
};
exports.default = Table;
