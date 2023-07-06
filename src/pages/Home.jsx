import React from "react";
import Layouts from "../components/Layout";
import Header from "../components/Header";
const Home = () => {
  return (
    <Layouts title="Home">
      <Header author="Dashboard" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">Home</div>
      </div>
    </Layouts>
  );
};

export default Home;
