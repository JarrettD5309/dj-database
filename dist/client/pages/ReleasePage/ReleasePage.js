"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./style.css");
const ReleasePage = () => {
    const [releaseNum, setReleaseNum] = (0, react_1.useState)('');
    const [releaseInfo, setReleaseInfo] = (0, react_1.useState)();
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const URL = 'http://localhost:3000';
    const handleSearch = () => {
        setIsLoading(true);
        fetch(`${URL}/discogs?releaseNum=${releaseNum}`)
            .then((res) => res.json())
            .then((json) => {
            setReleaseInfo(json);
            setIsLoading(false);
        })
            .catch((e) => console.log(e));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Discogs Release Search" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "release-num", children: "Discogs Release Number:" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "text", id: 'release-num', name: 'relese-num', value: releaseNum, onChange: event => setReleaseNum(event.target.value) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("button", { type: 'submit', children: "Search Release" })] }), (0, jsx_runtime_1.jsx)("hr", {}), isLoading && (0, jsx_runtime_1.jsx)("div", { className: 'lds-dual-ring' }), releaseInfo && !isLoading && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Artist: ", releaseInfo.artists[0].name] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Title: ", releaseInfo.title] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Genre: ", releaseInfo.genres.concat(', ')] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Year: ", releaseInfo.year] })] }))] }));
};
exports.default = ReleasePage;
