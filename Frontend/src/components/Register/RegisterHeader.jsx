import React from "react";
import BreadcrumbHeader from "../Reusable/BreadCumbHeader";

const RegisterHeader= () => (
  <BreadcrumbHeader
    title="REGISTER"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/category' },
      { label: 'shop', path: '/shop' },
   
     
     { label: 'login', path: '/login' },
     { label: 'Register', path: '/register' },
    ]}
  />
);
export default RegisterHeader;