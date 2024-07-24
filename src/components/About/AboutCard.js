import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{marginTop: '100px'}}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", lineHeight: 1.75 }}>
            Hi Everyone, I am <span className="purple">Kshitij Patil </span>
            from <span className="purple"> Sunnyvale, CA.</span>
            <br /> I am a passionate <span className="purple">DevOps Engineer</span> with a <span className="purple">Master's degree in Computer Science</span> from the <span className="purple">University at Buffalo, SUNY</span>. I specialize in <span className="purple">Kubernetes, Terraform, cloud infrastructure management</span>, and <span className="purple">GoLang</span>, with hands-on experience in configuring and optimizing complex environments. My expertise includes implementing <span className="purple">CI/CD pipelines</span>, automating workflows, and enhancing application performance. At Incalus Inc, I significantly reduced infrastructure costs and downtime, boosting deployment efficiency and scalability. With a strong background in programming languages like <span className="purple">Go, Python, and Bash</span>, I thrive in dynamic environments, driving innovation and operational excellence.
            { <br/> }
            Additionally, I am a <span className="purple">Certified Kubernetes Application Developer </span>.
            {<br /> }
            In my free time, I love playing tennis, working out, and cooking.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "If someone has to do it, why not you?"{" "}
          </p>
          <footer style={{marginBottom: '380px'}} className="blockquote-footer">Kshitij</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
