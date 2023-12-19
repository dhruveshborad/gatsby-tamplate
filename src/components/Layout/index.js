import React from "react";
import Header from "../Header";
const Layout = ({ element }) => {
  return (
    <div>
    <Header />
      <h1>Layout</h1>
      {element}
    </div>
  );
};
export default Layout;
