import React, { useEffect } from "react";
import Navbar from "./Navbar";

const Layouts = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layouts;
