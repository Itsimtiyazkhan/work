import React from "react";
import Bestselling from "@/components/bribooksstore/bestselling/Bestselling";
import Footer from "@/components/bribooksstore/footer/Footer";
import Toprated from "@/components/bribooksstore/toprated/Toprated";
import Header from "@/components/bribooksstore/head/Navbar";


const index = () => {
  return (
    <>
    
      <Header />
      <Bestselling />
      <Toprated />
      <Footer />
    </>
  );
};

export default index;
