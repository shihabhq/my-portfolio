import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col max-w-2xl mx-auto p-4 border rounded-lg lg:flex-row">
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </PageContainer>
  );
}
