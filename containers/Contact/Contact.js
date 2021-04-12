import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ContactForm from "../../components/contact/ContactForm";
import styles from "../../containers/Contact/Contact.module.css";

const Contact = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      id="contact"
      className={
        theme && theme === "light"
          ? `${styles.contact_form_background} py-5`
          : `${styles.contact_form_background_dark} py-5`
      }
    >
      <h1 className="text-center font-weight-light mb-5 text-white">Contact</h1>
      <Row className="mx-0">
        <ContactForm />
      </Row>
    </div>
  );
};

export default Contact;
