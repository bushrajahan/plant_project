import React from "react";
import BreadcrumbHeader from "../../Reusable/BreadCumbHeader";

const AccessHeader= () => (
  <BreadcrumbHeader
    title="Care"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/category' },
      { label: 'access', path: '/access' },
     
    
    ]}
  />
);
export default AccessHeader;