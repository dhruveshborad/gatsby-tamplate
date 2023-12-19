import React from "react";
import "@popperjs/core/dist/umd/popper.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Layout from "./src/components/Layout/index";
// import "./src/sass/app.css";

export const wrapRootElement = ({ element }) => <div>{element}</div>;
