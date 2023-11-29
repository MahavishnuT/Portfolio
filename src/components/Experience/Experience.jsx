import "./experience.scss";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const experienceRef = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".experience-title",
            start: "top 75%",
            end: "bottom top",
          },
        })
        .fromTo(".experience-title", {
            y: 40,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          })
        .fromTo(".experience-wrapper", {
            y: 40,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }, "-=0.5")
        
    },
    [],
    experienceRef
  );

  return (
    <section id="experience" ref={experienceRef}>
      <h2 className="experience-title">Mon expérience</h2>
      <div className="experience-wrapper">
        <p>
          J'ai connu plusieurs parcours très différents qui m'ont permis d'obtenir une grande polyvalence et une capacité d'adaptation unique. Avant de coder, je suis passé par des études en physique-chimie et en journalisme, avec un voyage en solitaire en Asie du Sud-Est qui m'a permis d'apprendre à me débrouiller seul.
        </p>
        <br />
        <span className="last-span">
          Vous pouvez en apprendre plus en téléchargeant mon CV
        </span>
        <br />
        <button>
          <a href="/MyCV/CV_FR_BRU.pdf" download>
            CV
          </a>
        </button>
        <br />
        <span className="last-span">
          Vous pouvez également me retrouver sur Linkedin et GitHub
        </span>
        <br />
        <div className="logos">
          <button>
            <a href="https://www.linkedin.com/in/tom-pujalte/" className="logo" target="_blank" rel="noreferrer">
              Linkedin
            </a>
          </button>
          <button>
            <a href="https://github.com/MahavishnuT" className="logo" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
