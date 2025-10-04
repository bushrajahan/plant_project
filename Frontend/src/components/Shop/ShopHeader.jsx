import React from "react";
import BreadcrumbHeader from "../Reusable/BreadCumbHeader";
const ShopHeader= () => (
  <BreadcrumbHeader
    title="SHOP ALL"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/catalog' },
      { label: 'shop', path: '/shop' },
    
    ]}
  />
);
export default ShopHeader;