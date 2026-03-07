import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <div className="about-card-outer" style={{ padding: "60px 40px 30px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
      <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "30px" }}>
        About Me
      </h1>
      <Card className="quote-card-view" style={{ maxWidth: "820px", margin: "0 auto" }}>
        <Card.Body className="about-card-body" style={{ padding: "36px 40px", textAlign: "left" }}>
          <p style={{ color: "#2563eb", fontSize: "1.05em", fontStyle: "italic", marginBottom: "20px", lineHeight: 1.65 }}>
            "I enjoy taking messy infrastructure and turning it into something predictable."
          </p>

          <p style={{ color: "#334155", fontSize: "0.97em", lineHeight: 1.85, marginBottom: "16px" }}>
            I work across the reliability stack, Kubernetes architecture, infrastructure-as-code,
            CI/CD systems, and production observability. At{" "}
            <span className="purple" style={{ fontWeight: 600 }}>TikTok</span>, I've led osquery
            rollouts across <span className="purple" style={{ fontWeight: 600 }}>170K+ hosts</span>,
            built high-throughput telemetry pipelines, and operated GitOps-driven deployments at scale.
          </p>

          <p style={{ color: "#334155", fontSize: "0.97em", lineHeight: 1.85, marginBottom: "16px" }}>
            I've also designed, deployed, and hosted{" "}
            <span className="purple" style={{ fontWeight: 600 }}>MCP servers</span> to enable AI systems
            to securely access internal infrastructure context, integrating with ArgoCD and Nexus to
            build controlled, production-grade interfaces between LLM workflows and real operational systems.
          </p>

          <p style={{ color: "#334155", fontSize: "0.97em", lineHeight: 1.85, marginBottom: "16px" }}>
            In my free time, I explore the intersection of{" "}
            <span className="purple" style={{ fontWeight: 600 }}>AI and reliability</span>, building
            small agentic systems that can reason over logs, telemetry, and infrastructure in ways that
            are actually useful. Currently{" "}
            <span className="purple" style={{ fontWeight: 600 }}>CKA and CKAD certified</span>, working
            toward Kubestronaut status in 2026.
          </p>

          <p style={{ color: "#334155", fontSize: "0.97em", lineHeight: 1.85, marginBottom: "0" }}>
            Outside work, I foster rescued dogs, probably the most rewarding part of my life.
            Always happy to talk reliability, automation, or where AI is taking all of this.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
