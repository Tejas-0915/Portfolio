import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "Tejas Bhad's personal portfolio site. Software Test engineer speialiased in full stack testing."
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Trust me with the quality of your product</Link>
          </h2>
          <p>
            Tejas Bhad&apos;s personal portfolio site. Software Test engineer
            Specialized in full-stack manual testing, Automation Testing,
            feature documentation, and product ownership.
          </p>
        </div>
      </header>
      <p>
        {" "}
        <h2>Welcome to my website</h2>
      </p>
    </article>
  </Main>
);

export default Index;
