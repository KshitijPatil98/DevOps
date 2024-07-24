import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGo,
  DiPython,
  DiJavascript1,
  DiLinux,
  DiWindows,
  DiDocker,
  DiJenkins,



} from "react-icons/di";

import {
  SiShell,
  SiTerraform,
  SiAnsible,
  SiPuppet,
  SiChef,
  SiKubernetes,
  SiHelm,
  SiGithubactions,
  SiGitlab,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiElasticstack,
  SiAmazoncloudwatch,
  SiAmazonec2,
  SiAmazonrds,
  SiAmazoneks,
  SiAmazoniam,
  SiAmazonroute53,
  SiApachegroovy,
  SiHyperledger,
  SiEthereum,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiApachecouchdb,
  SiMongodb,
  SiNeo4J,
  SiAwslambda,
 SiAmazons3
} from "react-icons/si";


import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <div>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGo  />
        <h5>GoLang</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachegroovy />
        <h5>Groovy</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShell />
        <h5>Bash</h5>
      </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <h5>Docker</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <h5>Docker-Swarm</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <h5>Kubernetes</h5>
        </Col> 
        <Col xs={4} md={2} className="tech-icons">
        <SiAmazoneks />
        <h5>Amazon EKS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm />
        <h5>Helm</h5>
        </Col>
        
    </Row>
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 />
        <h5>EC2</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiAmazoniam />
        <h5>IAM</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
        <h5>Lambda</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
        <h5>S3</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonroute53 />
        <h5>Route53</h5>
      </Col>
     
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
        <h5>Terraform</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
        <h5>Ansible</h5>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiChef />
        <h5>Chef</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPuppet />
        <h5>Puppet</h5>
      </Col>
    </Row>

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
        <h5>Jenkins</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
        <h5>Github Actions</h5>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <h5>Gitlab CI/CD</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArgo />
        <h5>ArgoCD</h5>
        </Col>
        </Row> 
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h5>PostgreSQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachecouchdb />
        <h5>CouchDB</h5>
        </Col> 
        <Col xs={4} md={2} className="tech-icons">
        <SiMongodb/>
        <h5>MongoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeo4J />
        <h5>Neo4j</h5>
        </Col>
    
        
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
        <h5>Prometheus</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
        <h5>Grafana</h5>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazoncloudwatch />
        <h5>CloudWatch</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticstack />
        <h5>SiElasticstack</h5>
      </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
        <h5>Windows</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <h5>Linux</h5>
      </Col>
    </Row>
    
    
    </div>
    
  );
}

export default Techstack;
