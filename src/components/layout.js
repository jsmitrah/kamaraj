import {Content} from "./profile";
import {SideBar} from "./sideBar";
import React from "react";

export const Layout = () => {
  return (
    <div className="container-fluid container-bg">
      <div className="p-5">
        <div className="row flex-nowrap main-container">
          <SideBar />
          <Content />
        </div>
      </div>
    </div>
  );
};
