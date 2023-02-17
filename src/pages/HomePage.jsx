import React from "react";

import Header from "../components/Header";
import { Outlet } from "react-router";
import Copyright from "../components/Copyright";

const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Copyright/>
    </>
  );
};

export default HomePage;
