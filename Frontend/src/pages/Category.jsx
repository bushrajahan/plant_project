import React from "react";
import Catalog from "../components/Categoory/Catelog";
import Items from "../components/Home/Items";
import Footer from "../components/Footer/Footer";
import Fruits from "../components/Categoory/Fruits";

function Category() {
  return (
    <div>
      <Catalog></Catalog>
      <Items></Items>
      <Fruits></Fruits>
      <Footer></Footer>
    

    </div>
  );
}

export default Category;
