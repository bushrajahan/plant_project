import React from "react";
import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import NewArrival from "../components/Home/NewArrival";
import BestSeller from "../components/Home/BestSeller";
import TodayDeal from "../components/Home/TodyaDeal";
import BestQuality from "../components/Home/BestQuality";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div >
      <Banner></Banner>
      <Category></Category>
      <NewArrival></NewArrival>
      <BestSeller></BestSeller>
      <TodayDeal></TodayDeal>
      <BestQuality></BestQuality>
      <Footer></Footer>
  
    </div>
  );
}

export default Home;