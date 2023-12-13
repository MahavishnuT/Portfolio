import "./experience.scss";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const arrayLngs = {
  fr: {
    url: "/MyCV/CV_FR_REM_Tom_Pujalte.pdf",
    text: "CV",
  },
  en: {
    url: "/MyCV/CV_ENG_BOG_Tom_Pujalte.pdf",
    text: "Resume",
  },
  es: {
    url: "/MyCV/CV_ESP_BOG_Tom_Pujalte.pdf",
    text: "Hoja de vida",
  },
};

function Experience() {
  const experienceRef = useRef();
  const tl = useRef();
  const { t, i18n } = useTranslation();

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
        .fromTo(
          ".experience-title",
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".experience-wrapper",
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    },
    [],
    experienceRef
  );

  return (
    <section id="experience" ref={experienceRef}>
      <h2 className="experience-title">{t("experience.title")}</h2>
      <div className="experience-wrapper">
        <p>{t("experience.text")}</p>
        <br />
        <span className="last-span">{t("experience.cv_text")}</span>
        <br />
        <button>
          <a
            href={process.env.PUBLIC_URL + arrayLngs[i18n.resolvedLanguage].url}
            download
          >
            {arrayLngs[i18n.resolvedLanguage].text}
          </a>
        </button>
        <br />
        <span className="last-span">{t("experience.socials")}</span>
        <br />
        <div className="logos">
          <button>
            <a
              href="https://www.linkedin.com/in/tom-pujalte/"
              className="logo"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </button>
          <button>
            <a
              href="https://github.com/MahavishnuT"
              className="logo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
