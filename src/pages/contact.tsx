import { ContactForm } from "components/Contact/ContactForm";
import { Layout } from "components/templates/Layout";
import { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
