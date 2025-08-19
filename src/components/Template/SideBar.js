import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/its_me.png`} alt="Tejas Bhad" />
      </Link>
      <header>
        <h2>Tejas Bhad</h2>
        <h3>Automation (Cypress) + Manual Tester</h3>
        <h3>ISTQB Certified Software Tester</h3>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Tejas, a dedicated Software Test Engineer with a passion
        for ensuring the seamless functionality and quality of software.
        Currently, I am contributing my expertise as a Software Test Engineer at{" "}
        <a href="https://www.linkedin.com/company/bridgenext/">Bridgenext</a>.
        where I collaborate closely with a dynamic development team to deliver
        exceptional solutions for our valued US client. In addition to my
        professional endeavors, I find joy in exploration and travel, engaging
        in thought-provoking discussions around new technologies that drive
        business development, and offering valuable insights for optimizing user
        interfaces.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Tejas Bhad <Link to="/">sdet.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
