import React from "react";
import Header from "../Header/Header";
import UserHeader from "../Header/UserHeader";
import SidebarMenu from "../Sidebar/SidebarMenu";

const UserLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <SidebarMenu></SidebarMenu>

      <div className="container-fluid p-3 justify-content-center h-100 min-vh-100 mt-3">
        <div id="content">
          {" "}
          <UserHeader></UserHeader>
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
