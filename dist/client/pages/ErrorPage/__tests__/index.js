"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const ErrorPage_1 = __importDefault(require("../ErrorPage"));
describe('ErrorPage', () => {
    test('check text', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ErrorPage_1.default, {}));
        expect(react_1.screen.getByText('404 NOT FOUND')).toBeTruthy();
    });
});
