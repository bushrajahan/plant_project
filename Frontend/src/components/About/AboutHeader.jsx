import React from "react";
import BreadcrumbHeader from "../Reusable/BreadCumbHeader";
const AboutHeader= () => (
  <BreadcrumbHeader
    title="CATALOG"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
     
    ]}
  />
);
export default AboutHeader;