import { Col, Image, Row } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";
import img from '/herosection.webp';
import service1 from '/services1.webp';
import service2 from '/services2.webp';
import service3 from '/services3.webp';
import { useRef } from "react";
import GoogleReviews from "../components/GoogleReviews";

export default function Home() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  type ImageSource = {
    src: string;
    title: string;
  }

  const ServiceImage: ImageSource[] = [{src: service1, title: 'Ganti Sparepart'},
    {src: service2, title: 'Perbaikan Motherboard Mati'},
    {src: service3, title: 'Cleaning Hardware'}
  ];

  return (
    <div>
      <div className="d-flex flex-row md:flex-wrap justify-content-between align-items-center container bg-body-tertiary py-3" id="home">
        <motion.div style={{ width: '45%'}} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 } }}>
          <h3 className="text-body-emphasis">Selamat Datang di <span className="fw-bold" style={{ color: '#ff5e00' }}>WISNU-TECH</span></h3>
          <p className="fs-4">Solusi untuk berbagai macam kerusakan laptop anda!</p>
          <a href="#services" className="btn text-white" style={{ backgroundColor: '#ff5e00' }}>Lihat Detail</a>
        </motion.div>
        <motion.div style={{width: '40%'}} initial={{ opacity: -200 }} transition={{ duration: 2 }} animate={{ opacity:100 }} >
          <Image src={img} className="object-fit-cover border rounded" width={'100%'} />
        </motion.div>
      </div>

      <motion.div className="py-5" style={{ backgroundColor: "#ffba4a", opacity, y }} ref={ref} id="services">
        <h3 className="text-center">Layanan Kami</h3>
        <div className="container mt-5">
          <Row sm={1} md={2} lg={3} className="justify-content-center g-4">
            {ServiceImage.map((item, i) => (
              <Col key={i} className="d-flex flex-column justify-content-center align-items-center">
                <Image
                  src={item.src}
                  className="img-fluid rounded"
                  style={{ objectFit: "cover", maxHeight: "250px" }}
                />
                <p className="text-center mt-2 fs-5">{item.title}</p>
              </Col>
            ))}
          </Row>
        </div>
      </motion.div>

      <motion.div className="container py-5" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} id="about">
        <h3 className="text-center mb-4">Tentang Kami</h3>
        <p className="text-center fs-5">
          <span className="fw-semibold" style={{ color: '#fc6005' }}>WISNU-TECH</span> adalah layanan reparasi laptop dengan pengalaman lebih dari 3 tahun.
          Kami mengutamakan kualitas perbaikan, kecepatan, dan harga yang terjangkau. Jangan ragu untuk memulai konsultasi.
        </p>
      </motion.div>

      <motion.div className="py-5" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ backgroundColor: '#e3e3e3' }} id="testimoni">
          <GoogleReviews />
      </motion.div>

    </div>
  );
}
