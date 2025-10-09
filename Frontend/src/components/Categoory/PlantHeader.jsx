import React from "react";
import BreadcrumbHeader from "../Reusable/BreadCumbHeader";
const PlantHeader= () => (
  <BreadcrumbHeader
    title="PLANTS"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/catalog' },
      { label: 'plant', path: '/plant' },
    ]}
  />
);
export default PlantHeader;