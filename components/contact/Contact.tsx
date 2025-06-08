import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      className="body-padding-x body-padding-y"
      id="contact"
    >
      <div className="flex flex-col md:flex-row md:gap-x-10 md:px-6 lg:px-8">
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
        <div className="w-full md:w-1/2 py-5">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
