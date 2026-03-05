import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          Technical <strong className="purple">Skillset</strong>
        </h1>
        <p style={{ color: "#64748b", textAlign: "center", marginBottom: "10px", fontSize: "0.92em" }}>
          Technologies and tools I work with
        </p>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
