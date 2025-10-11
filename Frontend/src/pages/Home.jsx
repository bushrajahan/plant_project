import React from "react";
import Banner from "../components/Home/Banner";

import NewArrival from "../components/Home/NewArrival";
import BestSeller from "../components/Home/BestSeller";
import TodayDeal from "../components/Home/TodyaDeal";
import BestQuality from "../components/Home/BestQuality";

import Seed from "../components/Home/Seed";
import Quality from "../components/Home/Quality";

function Home() {
  return (
    <div className="m-12" >
      <Banner></Banner>
      <Seed></Seed>
     
      <NewArrival></NewArrival>
      <BestSeller></BestSeller>
      <TodayDeal></TodayDeal>
       <Quality></Quality>
      <BestQuality></BestQuality>'
      
     

  
    </div>
  );
}

export default Home;