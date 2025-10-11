import React from "react";
import BreadcrumbHeader from "../../Reusable/BreadCumbHeader";

const CareHeader= () => (
  <BreadcrumbHeader
    title="Care"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/category' },
      { label: 'care', path: '/care' },
     
    
    ]}
  />
);
export default CareHeader;