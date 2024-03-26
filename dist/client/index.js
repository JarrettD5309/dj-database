"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = __importDefault(require("./App"));
require("./reset.css");
const react_router_dom_1 = require("react-router-dom");
const ErrorPage_1 = __importDefault(require("./pages/ErrorPage/ErrorPage"));
const ReleasePage_1 = __importDefault(require("./pages/ReleasePage/ReleasePage"));
const routes = [
    {
        path: '/',
        element: (0, jsx_runtime_1.jsx)(App_1.default, {}),
        errorElement: (0, jsx_runtime_1.jsx)(ErrorPage_1.default, {})
    },
    {
        path: '/release',
        element: (0, jsx_runtime_1.jsx)(ReleasePage_1.default, {})
    }
];
const router = (0, react_router_dom_1.createBrowserRouter)(routes);
client_1.default.createRoot(document.getElementById('root')).render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.RouterProvider, { router: router }) }));
