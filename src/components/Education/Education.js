import React from "react";

const educationInfo = [
  {
    schoolName: "University at Buffalo, SUNY",
    logo: require("../../Assets/ub_logo.jpg"),
    degree: "Master of Science – Computer Science",
    duration: "Aug 2022 – Dec 2023",
    location: "Buffalo, NY",
    coursework: [
      "Algorithms Analysis & Design",
      "Machine Learning",
      "Modern Networking Concepts",
      "Advanced Programming Languages",
      "Data Models & Query Language",
      "Data Intensive Computing",
    ],
  },
  {
    schoolName: "Smt. Kashibai Navale College of Engineering",
    logo: require("../../Assets/puneuniversity_logo.jpg"),
    degree: "Bachelor of Engineering – Computer Science",
    duration: "Aug 2016 – Jun 2020",
    location: "Pune, India",
    coursework: [
      "Operating Systems",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Object Oriented Programming",
      "AI & Machine Learning",
      "Database Management Systems",
    ],
  },
];

export default function Education() {
  return (
    <div style={{ paddingBottom: "60px", paddingTop: "60px", background: "#ffffff" }}>
      <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "48px" }}>
        Education
      </h1>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: "28px" }}>
        {educationInfo.map((school, i) => (
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "4px", marginBottom: "2px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src={school.logo} alt={school.schoolName} style={{ width: 44, height: 44, objectFit: "contain", borderRadius: "6px" }} />
                <span style={{ color: "#2563eb", fontWeight: 700, fontSize: "1.05em" }}>{school.schoolName}</span>
              </div>
              <span style={{ color: "#475569", fontSize: "0.82em", whiteSpace: "nowrap" }}>{school.duration}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "16px", paddingLeft: "56px" }}>
              <span style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.93em" }}>{school.degree}</span>
              <span style={{ color: "#475569", fontSize: "0.82em" }}>{school.location}</span>
            </div>
            <p style={{ color: "#475569", fontSize: "0.72em", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
              Relevant Coursework
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {school.coursework.map((course, j) => (
                <span key={j} style={{ background: "#f0f7ff", border: "1px solid #bfdbfe", borderRadius: "4px", padding: "3px 10px", fontSize: "0.8em", color: "#1e40af" }}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
