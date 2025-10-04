import React from "react";
import BreadcrumbHeader from "../components/Reusable/BreadCumbHeader";

const ContactHeader= () => (
  <BreadcrumbHeader
    title="CONTACT"
    subtitle="Transform Your Garden into a Personal Paradise!"
    breadcrumbs={[
      { label: 'Home', path: '/' },
      { label: 'Catalog', path: '/category' },
      { label: 'shop', path: '/shop' },
       { label: 'service', path: '/services' },
      { label: 'contact', path: '/contact' },
    
    ]}
  />
);
export default ContactHeader;