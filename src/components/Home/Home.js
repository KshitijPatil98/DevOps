import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Kshitij_Patil_DevOps.pdf";
import myImg from "../../Assets/profile.jpg";
import cert from "../../Assets/ckad.png";
import cert2 from "../../Assets/hfcp.png";
import Experience from "../Experience/Experience";
import { pdfjs } from "react-pdf";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import AboutCard from "../About/AboutCard";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KSHITIJ PATIL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                style={{
                  borderRadius: "50%",
                  width: 400,
                  display: "block",
                }}
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div style={{display: 'flex', justifyContent:'center'}}>
        <a href={"https://www.credly.com/badges/adce2db3-5596-422d-97c3-859209d9bc88/public_url"} target="_blank" rel="noopener noreferrer">
       
      <img
          style={{
            borderRadius: "50%",
            width: 150,
            display: "block",
          }}
          src={cert}
          className="img-fluid"
          alt="avatar"
        />
      </a>
      <a href={"https://www.credly.com/badges/e6119159-1917-4fe2-a82d-f24c039449a9/public_url"} target="_blank" rel="noopener noreferrer">
       
      <img
          style={{
            borderRadius: "50%",
            width: 150,
            display: "block",
          }}
          src={cert2}
          className="img-fluid"
          alt="avatar"
        />
      </a>
      </div>
      {/* <Home2 /> */}
      <AboutCard />
      <About />

      <Education />
      <Experience />
      <Projects />
      <ResumeNew />
    </section>
  );
}

export default Home;
