import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "../containers/Content";
import './styles/Layout.css'

const Layout = () => {
  return (
    <div className="c-app c-default-layout">
        <Header />
      <div className="c-wrapper">
        <div className="c-body">
          <Content />
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Layout;