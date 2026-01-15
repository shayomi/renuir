import ContactPage from "@/components/shared/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Support | Renuir",
  description: "Get in touch with Renuir support team for assistance and inquiries",
};

const page = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default page;

