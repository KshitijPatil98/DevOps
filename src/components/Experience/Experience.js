import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiWorkplace } from "react-icons/si";

function Experience() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <h1 className="project-heading" style={{ textAlign: "center" }}>
              <strong className="purple">Experience</strong>
            </h1>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(153, 50, 204)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(153, 50, 2043)",
                }}
                date="May 2023 - Present"
                iconStyle={{ background: "rgb(153, 50, 204)", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3 className="vertical-timeline-element-title">
                  Incalus Inc.
                </h3>
                <h4 className="vertical-timeline-element-title">
                  DevOps Engineer
                </h4>
                <h5 style={{ color: "black" }}>Fremont, CA</h5>
                <h6>
                  • Configured a Kubernetes cluster from scratch using Kubeadm,
                  including setting up the control plane and worker nodes,
                  resulting in a 34% reduction in infrastructure costs.
                </h6>
                <h6>
                  • Automated infrastructure provisioning with Terraform,
                  streamlining setup and reducing time by 37%.
                </h6>
                <h6>
                  • Engineered CI/CD pipelines with GitLab CI/CD and GitHub
                  Actions, accelerating deployment cycles by 46%.
                </h6>
                <h6>
                  • Spearheaded ArgoCD-driven GitOps workflows, optimizing
                  deployment efficiency by 50%.{" "}
                </h6>
                <h6>
                  • Created custom Kubernetes Controllers in Golang, improving
                  automation and resource management by 28%.
                </h6>
                <h6>
                  • Developed Python automation for deployment and system
                  management, reducing downtime by 60%.
                </h6>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(153, 50, 204)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(153, 50, 204)",
                }}
                date="December 2021 - April 2022"
                iconStyle={{ background: "rgb(153, 50, 204)", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3 className="vertical-timeline-element-title">
                  Mckinley Rice
                </h3>
                <h4 className="vertical-timeline-element-title">
                  DevOps Engineer
                </h4>
                <h5 style={{ color: "black" }}>Pune, India</h5>
                <h6>
                  • Designed and deployed a secure AWS network with Terraform,
                  using a reverse proxy in a public subnet, EC2 instances in
                  private subnets, NAT Gateway, and Internet Gateway, enhancing
                  security by 43%.
                </h6>
                <h6>
                  • Reduced MTTR by 63% through log monitoring and Python
                  automation scripts to prevent outages.
                </h6>
                <h6>
                  • Implemented Nginx Ingress Controller in Kubernetes, refining
                  routing and enhancing app scalability by 20%.
                </h6>
                <h6>
                  • Optimized deployments with Kubernetes, achieving 35% faster
                  speeds and maintaining 99.9% uptime.
                </h6>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(153, 50, 204)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(153, 50, 204)",
                }}
                date="November 2020 - December 2021"
                iconStyle={{ background: "rgb(153, 50, 204)", color: "#fff" }}
                icon={<SiWorkplace />}
              >
                <h3 className="vertical-timeline-element-title">Cognizant </h3>
                <h4 className="vertical-timeline-element-title">
                  Platform Engineer{" "}
                </h4>
                <h5 style={{ color: "black" }}>Pune, India</h5>
                <h6>
                  • Reduced microservices deployment time by 45% with Github
                  Actions, SonarQube, AWS ECR, ECS, and Docker.
                </h6>
                <h6>
                  • Automated system tasks and optimized workflows using Python
                  and Bash scripts, improving efficiency by 30%.
                </h6>
                <h6>
                  • Employed Terraform for provisioning AWS infrastructure,
                  leading to a 40% reduction in deployment time.
                </h6>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Experience;
