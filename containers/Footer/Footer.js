import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar variant="dark"  className="mx-auto text-white bg-realy-dark">
      <Nav className="mx-auto d-flex align-items-center justify-content-center w-100">
        <Nav.Link href="#top">Top</Nav.Link>
        <Nav.Link href="/mentions-legales">Mentions légales</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
