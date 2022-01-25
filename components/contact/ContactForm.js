import { Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import styles from "../../containers/Contact/Contact.module.css";

const ContactForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    message: "",
  });

  const handleChange = (name) => (e) => {
    /* setError(""); */
    setUserCredentials({
      ...userCredentials,
      [name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userCredentials.email !== "" && userCredentials.message !== "") {
        const user = userCredentials;
        const response = await axios.post(
          `${process.env.REST_API}/api/send-email`,
          {
            user,
          }
        );
        console.log(response);
        setUserCredentials({
          ...userCredentials,
          message: "Votre message est bien parti",
          email: "",
        });
      } else {
        console.log("prout");
      }
    } catch (err) {
      console.log("Une erreur est survenue");
    }
  };

  return (
    <Col md={6} className="mx-auto text-white">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Votre adresse email</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange("email")}
            name="email"
            value={userCredentials.email}
            type="email"
            required
            placeholder="Votre adresse email"
          />
          <Form.Text className="text-white">
            Je ne communiquerais jamais votre adresse email.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            value={userCredentials.message}
            onChange={handleChange("message")}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button
          block
          className={`${styles.rounded_circle} mx-auto my-md-5`}
          variant="primary"
          type="submit"
        >
          Envoyer
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
