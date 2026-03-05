import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import About from "../About/About";
import AboutCard from "../About/AboutCard";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/profile.jpg";
import ckadBadge from "../../Assets/ckad.png";
import ckaBadge from "../../Assets/cka.png";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";

function Home() {
  return (
    <section>
      {/* ── Hero ── */}
      <div id="home">
        <Container fluid className="home-section">
          <Particle />
          <Container className="home-content">
            <Row className="align-items-center">
              <Col md={7} style={{ paddingTop: "80px", paddingBottom: "40px" }}>
                <h1 style={{ fontSize: "2.8em", fontWeight: 700, color: "#0f172a", marginBottom: "6px", letterSpacing: "-0.5px" }}>
                  Kshitij Patil
                </h1>

                <h2 style={{ color: "#2563eb", fontWeight: 600, fontSize: "1.25em", marginBottom: "20px", letterSpacing: "0.2px" }}>
                  Site Reliability Engineer
                </h2>

                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", marginBottom: "28px" }}>
                  <a
                    href="https://www.credly.com/badges/adce2db3-5596-422d-97c3-859209d9bc88/public_url"
                    target="_blank" rel="noopener noreferrer"
                    className="cert-badge-item"
                    style={{ flexDirection: "row", gap: "12px" }}
                  >
                    <img src={ckadBadge} alt="CKAD" style={{ width: 60, height: 60, borderRadius: 6 }} />
                    <span style={{ fontSize: "0.82em", color: "#334155", maxWidth: "none", textAlign: "left" }}>
                      Certified Kubernetes<br />Application Developer
                    </span>
                  </a>
                  <a
                    href="https://www.credly.com/badges/bfb6095e-793c-4ef7-a7f1-8bea8567c042/public_url"
                    target="_blank" rel="noopener noreferrer"
                    className="cert-badge-item"
                    style={{ flexDirection: "row", gap: "12px" }}
                  >
                    <img src={ckaBadge} alt="CKA" style={{ width: 60, height: 60, borderRadius: 6 }} />
                    <span style={{ fontSize: "0.82em", color: "#334155", maxWidth: "none", textAlign: "left" }}>
                      Certified Kubernetes<br />Administrator
                    </span>
                  </a>
                </div>

                <p style={{ color: "#475569", fontSize: "0.97em", lineHeight: 1.85, marginBottom: "28px", maxWidth: "520px" }}>
                  Building reliable, observable, and scalable infrastructure.
                  Currently at <span style={{ color: "#0f172a", fontWeight: 600 }}>TikTok</span>,
                  working across Kubernetes, CI/CD, and production telemetry at scale.
                </p>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
                  <a href="https://github.com/KshitijPatil98" target="_blank" rel="noopener noreferrer" className="hero-social-btn">
                    <AiFillGithub size={17} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/kshitijpatil1998/" target="_blank" rel="noopener noreferrer" className="hero-social-btn">
                    <FaLinkedinIn size={15} /> LinkedIn
                  </a>
                  <a href="mailto:patilkshitij735@gmail.com" className="hero-social-btn">
                    <AiOutlineMail size={17} /> Email
                  </a>
                </div>
              </Col>

              <Col md={5} style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "80px", paddingBottom: "40px" }}>
                <img
                  src={myImg}
                  alt="Kshitij Patil"
                  style={{
                    width: "100%",
                    maxWidth: 360,
                    height: "auto",
                    borderRadius: "12px",
                    border: "2px solid #dbeafe",
                    boxShadow: "0 8px 40px rgba(37, 99, 235, 0.1)",
                    display: "block",
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

      <div id="about"><AboutCard /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><Education /></div>
      <div id="resume"><ResumeNew /></div>
    </section>
  );
}

export default Home;
