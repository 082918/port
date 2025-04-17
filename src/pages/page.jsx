import { useState } from "react";
import React, { useRef, useEffect } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Skill from "../components/Skill";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Page() {
  return (
    <>
      <Header />
      <main>
        <Profile />
      </main>
      <section>
        <Skill />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <footer></footer>
    </>
  );
}

export default Page;
