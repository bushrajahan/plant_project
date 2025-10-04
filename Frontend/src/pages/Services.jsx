import React from "react";
import BreadcrumbHeader from "../components/Reusable/BreadCumbHeader";
function Services() {
  return (
   <div>
    <BreadcrumbHeader
    title="Services"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/category' },
      { label: 'shop', path: '/shop' },
      { label: 'contact', path: '/contact' },
    
    ]}
  />
   </div>
  );
}

export default Services;
