import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar variant="dark" expand="lg" className="mx-auto text-white bg-realy-dark">
      <Nav className="mx-auto">
        <Nav.Link href="#top">Top</Nav.Link>
        <Nav.Link href="/mentions-legales">Mentions légales</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
