import { ContactForm } from "components/Contact/ContactForm";
import { Layout } from "components/templates/Layout";
import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
