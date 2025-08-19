import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import Certification from "../components/Resume/Ceritification";

import degrees from "../data/resume/degrees";
import positions from "../data/resume/positions";
import certifications from "../data/resume/certifications";
import { skills, categories } from "../data/resume/skills";

const sections = ["Education", "Experience", "Certification", "Skills"];

const Resume = () => (
  <Main
    title="Resume"
    description="Tejas Bhad's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <section className="profile-summary" style={{ marginBottom: "2rem" }}>
        <h3>Tejas Bhad</h3>
        <p>
          <strong>Software Test Engineer</strong>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:tejasbhad.sdet@gmail.com">tejasbhad.sdet@gmail.com</a>{" "}
          | Phone: 9075899681 | Pune, India
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/tejas-bhad"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/tejas-bhad
          </a>
        </p>
        <p>
          <strong>Profile:</strong> Experienced software test engineer with over
          4+ years of expertise in web, device, and automation testing.
          Proficient in leveraging business analytical skills to develop user
          interfaces that meet both business requirements and user perspectives.
          I am looking forward to working in an organization where I can utilize
          my skills and innovative thinking to contribute to the growth of the
          organization.
        </p>
      </section>
      <Education data={degrees} />
      <Experience data={positions} />
      <Certification data={certifications} />
      <Skills skills={skills} categories={categories} />
      <section className="resume-extra" style={{ marginTop: "2rem" }}>
        <h3>Achievements</h3>
        <ul>
          <li>
            Award recognized for using skills and expertise in a range of fields
            to deliver exceptional outcomes and timely deliveries.
          </li>
        </ul>
        <h3>Interests</h3>
        <ul>
          <li>Quality and Precision</li>
          <li>User Experience (UX) and Design Ideology</li>
          <li>Playing Outdoor Games</li>
        </ul>
      </section>
    </article>
  </Main>
);

export default Resume;
