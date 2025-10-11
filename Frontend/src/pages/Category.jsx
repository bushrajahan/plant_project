import React from "react";
import Catalog from "../components/Categoory/Catelog";
import Items from "../components/Home/Items";

import Fruits from "../components/Categoory/Fruits";

function Category() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <Catalog></Catalog>
      <Items></Items>
      <Fruits></Fruits>
     
    

    </div>
  );
}

export default Category;
