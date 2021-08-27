import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "../containers/Content";
import './styles/Layout.css'
import Sidebar from "./Sidebar";
import Body from "../components/Body";

const Layout = ({spotify}) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
        </div>
      <div className="">
        <div className="">
         {/* <Content />  */}
        </div>
      </div>
         <Footer /> 
    </div>
  );
};

export default Layout;