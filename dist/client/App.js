"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Table_1 = __importDefault(require("./components/table/Table"));
const App = () => {
    const [records, setRecords] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        fetch('http://localhost:3000/records')
            .then((res) => res.json())
            .then((json) => setRecords(json))
            .catch((e) => console.log(e));
    }, []);
    const handleTestClick = function () {
        console.log(records);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "DJ Database" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleTestClick, children: "TEST" }), records && (0, jsx_runtime_1.jsx)(Table_1.default, { records: records })] }));
};
exports.default = App;
