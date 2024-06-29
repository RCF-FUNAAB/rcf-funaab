import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const colors = {
  "black-10": "var(--black-10)",
  "black-100": "var(--black-100)",
  "black-20": "var(--black-20)",
  "black-30": "var(--black-30)",
  "black-40": "var(--black-40)",
  "black-50": "var(--black-50)",
  "black-60": "var(--black-60)",
  "black-70": "var(--black-70)",
  "black-80": "var(--black-80)",
  "black-90": "var(--black-90)",
  "black-base": "var(--black-base)",
  error: "var(--error)",
  "grey-10": "var(--grey-10)",
  "grey-100": "var(--grey-100)",
  "grey-20": "var(--grey-20)",
  "grey-30": "var(--grey-30)",
  "grey-40": "var(--grey-40)",
  "grey-50": "var(--grey-50)",
  "grey-60": "var(--grey-60)",
  "grey-70": "var(--grey-70)",
  "grey-80": "var(--grey-80)",
  "grey-90": "var(--grey-90)",
  "grey-base": "var(--grey-base)",
  link: "var(--link)",
  "primary-10": "var(--primary-10)",
  "primary-100": "var(--primary-100)",
  "primary-20": "var(--primary-20)",
  "primary-30": "var(--primary-30)",
  "primary-40": "var(--primary-40)",
  "primary-50": "var(--primary-50)",
  "primary-60": "var(--primary-60)",
  "primary-70": "var(--primary-70)",
  "primary-80": "var(--primary-80)",
  "primary-90": "var(--primary-90)",
  "primary-base": "var(--primary-base)",
  "secondary-10": "var(--secondary-10)",
  "secondary-100": "var(--secondary-100)",
  "secondary-20": "var(--secondary-20)",
  "secondary-30": "var(--secondary-30)",
  "secondary-40": "var(--secondary-40)",
  "secondary-50": "var(--secondary-50)",
  "secondary-60": "var(--secondary-60)",
  "secondary-70": "var(--secondary-70)",
  "secondary-80": "var(--secondary-80)",
  "secondary-90": "var(--secondary-90)",
  "secondary-base": "var(--secondary-base)",
  success: "var(--success)",
  warning: "var(--warning)",
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter extendTheme={colors}>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
