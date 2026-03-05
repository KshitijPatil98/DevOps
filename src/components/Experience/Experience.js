import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

const jobs = [
  {
    company: "TikTok",
    title: "Site Reliability Engineer",
    date: "Feb 2025 – Present",
    location: "San Jose, CA",
    bullets: [
      <>Led osquery deployment across <strong>170K+ production machines</strong>, sustaining 99.9% agent uptime and fleet visibility.</>,
      <>Built a Kafka-based telemetry pipeline handling <strong>2M+ events/min</strong> with sub-second delivery to SIEM.</>,
      <>Operated ZTI control plane on Kubernetes, backed by SPIFFE/SPIRE, supporting <strong>170M+ users</strong>.</>,
      <>Spearheaded ArgoCD-driven GitOps workflows, <strong>optimizing deployment efficiency by 50%</strong>.</>,
    ],
  },
  {
    company: "Gala Games",
    title: "Site Reliability Engineer",
    date: "Oct 2024 – Feb 2025",
    location: "San Francisco, CA",
    bullets: [
      <>Leveraged Kubernetes Operators and CRDs to manage Layer 1 blockchain infrastructure hosting <strong>$600M in NFTs</strong>.</>,
      <>Cut compute costs by <strong>25%</strong> by shifting EKS workloads to Karpenter-provisioned Spot instances with tuned autoscaling.</>,
      <>Integrated Prometheus and Grafana for real-time monitoring, <strong>improving observability by 35%</strong>.</>,
      <>Secured production Kubernetes clusters with Velero, protecting <strong>$600M in assets</strong>.</>,
    ],
  },
  {
    company: "Incalus Inc.",
    title: "Site Reliability Engineer",
    date: "May 2023 – Oct 2024",
    location: "Fremont, CA",
    bullets: [
      <>Configured a Kubernetes cluster from scratch with kubeadm (control plane + workers), <strong>cutting infrastructure costs by 34%</strong>.</>,
      <>Engineered CI/CD pipelines with GitLab CI/CD and GitHub Actions, <strong>accelerating deployment cycles by 46%</strong>.</>,
      <>Implemented NGINX Ingress Controller in Kubernetes, refining routing and <strong>enhancing scalability by 20%</strong>.</>,
    ],
  },
  {
    company: "McKinley Rice",
    title: "Site Reliability Engineer",
    date: "Dec 2021 – Apr 2022",
    location: "Pune, India",
    bullets: [
      <>Automated infrastructure provisioning with Terraform, streamlining setup and <strong>reducing time by 43%</strong>.</>,
      <>Reduced MTTR by <strong>63%</strong> through log monitoring and Python automation scripts to prevent outages.</>,
    ],
  },
  {
    company: "Cognizant",
    title: "Programmer Analyst – Site Reliability",
    date: "Nov 2020 – Dec 2021",
    location: "Pune, India",
    bullets: [
      <>Reduced microservices deployment time by <strong>45%</strong> with GitHub Actions, SonarQube, AWS ECR, ECS, and Docker.</>,
      <>Built Kibana and Splunk dashboards for service latency and error rate, <strong>reducing detection time by 70%</strong>.</>,
    ],
  },
];

function Experience() {
  return (
    <section>
      <Container fluid style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <Particle />
        <Container style={{ paddingTop: "80px", paddingBottom: "60px", maxWidth: "860px" }}>
          <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "48px" }}>
            Work Experience
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {jobs.map((job, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  borderLeft: "4px solid #2563eb",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  padding: "24px 28px",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "4px", marginBottom: "4px" }}>
                  <span style={{ color: "#2563eb", fontWeight: 700, fontSize: "1.05em" }}>{job.company}</span>
                  <span style={{ color: "#475569", fontSize: "0.82em", whiteSpace: "nowrap" }}>{job.date}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "14px" }}>
                  <span style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.93em" }}>{job.title}</span>
                  <span style={{ color: "#475569", fontSize: "0.82em" }}>{job.location}</span>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", textAlign: "left" }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ paddingLeft: "14px", textIndent: "-14px", textAlign: "left", color: "#475569", fontSize: "0.88em", lineHeight: 1.7, marginBottom: j < job.bullets.length - 1 ? "6px" : 0 }}>
                      • {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Experience;
