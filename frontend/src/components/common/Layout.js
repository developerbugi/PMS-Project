import React from "react";

//import components
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </>
  );
};

export default Layout;
