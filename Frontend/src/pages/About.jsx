import React from "react";
import BreadcrumbHeader from "../components/Reusable/BreadCumbHeader";
function About() {
  return (
   <div>
    <BreadcrumbHeader
    title="About"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
     
    ]}
  />
   </div>
  );
}

export default About;
