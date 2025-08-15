import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer className="bg-dark text-light py-4 mt-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} className="mb-3 mb-md-0">
            <h5 className="fw-bold">WISNU-TECH</h5>
            <p className="mb-0">Solusi untuk berbagai macam kerusakan laptop anda</p>
          </Col>
          <Col md={6}>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <FaEnvelope className="me-2" />
                <a href="mailto:wisnuajipamungkas354@gmail.com" className="text-light text-decoration-none">
                  wisnuajipamungkas354@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <FaInstagram className="me-2" />
                <a href="https://instagram.com/wisnutech_" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  @wisnutech_
                </a>
              </li>
              <li>
                <FaWhatsapp className="me-2" />
                <a href="https://wa.me/6285889634432" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">
                  +62 858-8963-4432
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3 border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} WISNU-TECH. All rights reserved.
        </p>
      </Container>
    </motion.footer>
  );
}
