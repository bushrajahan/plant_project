import React from "react";
import BreadcrumbHeader from "../../Reusable/BreadCumbHeader";

const GiftHeader= () => (
  <BreadcrumbHeader
    title="Gifts"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/category' },
      { label: 'shop', path: '/gift' },
     
    
    ]}
  />
);
export default GiftHeader;