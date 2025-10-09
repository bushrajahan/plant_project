import React from "react";
import BreadcrumbHeader from '../Reusable/BreadCumbHeader'

const LoginHeader= () => (
  <BreadcrumbHeader
    title="LOGIN"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/category' },
      { label: 'shop', path: '/shop' },
       { label: 'service', path: '/services' },
      { label: 'contact', path: '/contact' },
     { label: 'login', path: '/login' },
    ]}
  />
);
export default LoginHeader;