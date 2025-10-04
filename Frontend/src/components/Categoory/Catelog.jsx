import React from "react";
import BreadcrumbHeader from "../Reusable/BreadCumbHeader";
const Catalog = () => (
  <BreadcrumbHeader
    title="CATALOG"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/catalog' },
    ]}
  />
);
export default Catalog;