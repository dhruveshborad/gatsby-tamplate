import React from "react";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Layout from "./src/components/Layout/index";
// import "./src/sass/app.css";

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
