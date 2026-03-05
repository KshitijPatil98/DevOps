import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJenkins } from "react-icons/di";
import { SiTerraform, SiKubernetes } from "react-icons/si";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "#64748b", marginBottom: "10px" }}>
          A selection of projects I've built and shipped.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              icon={<DiJenkins color="#d33833" />}
              headerGradient="linear-gradient(135deg, #1a0a0a, #3d1010)"
              title="End-to-End Jenkins CI Pipeline with SonarQube"
              description="Built a full Jenkins CI pipeline covering code clone, dependency install, linting, unit testing, coverage reports, SonarQube static analysis, and Docker image publishing to Docker Hub with commit ID tags."
              ghLink="https://github.com/KshitijPatil98/Jenkins_CI_Project"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              icon={<SiKubernetes color="#326ce5" />}
              headerGradient="linear-gradient(135deg, #0a1a3a, #10285a)"
              title="Blockchain Network Deployment on Kubernetes"
              description="Deployed a permissioned blockchain network on a Kubernetes cluster using Deployments, Jobs, ConfigMaps, Secrets, Persistent Volumes with NFS, and an NGINX Ingress controller."
              ghLink="https://github.com/KshitijPatil98/Hyperledger-Fabric-K8"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              icon={<SiTerraform color="#7b42bc" />}
              headerGradient="linear-gradient(135deg, #1a0a3a, #2d1060)"
              title="Infrastructure Management with Terraform"
              description="Implemented Terraform projects covering AWS EC2 remote provisioning, DynamoDB creation, S3 remote backend with state locking, secrets management via AWS Secrets Manager, and Terraform Workspaces for environment isolation."
              ghLink="https://github.com/KshitijPatil98/Terraform_Projects"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
