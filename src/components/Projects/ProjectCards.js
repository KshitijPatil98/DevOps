import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div
        className="project-card-icon-header"
        style={{ background: props.headerGradient || "linear-gradient(135deg, #0a2a50, #0d3a70)" }}
      >
        <span style={{ position: "relative", zIndex: 1, fontSize: "2.8em" }}>
          {props.icon}
        </span>
      </div>
      <Card.Body style={{ padding: "20px" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto", paddingTop: "12px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;GitHub
          </Button>
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
