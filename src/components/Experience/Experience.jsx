import "./experience.scss";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

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
      <h2 className="experience-title">{t('experience.title')}</h2>
      <div className="experience-wrapper">
        <p>
          {t('experience.text')}
        </p>
        <br />
        <span className="last-span">
          {t('experience.cv_text')}
        </span>
        <br />
        {i18n.language === "fr" && 
          <button>
              <a href="/MyCV/CV_FR_BRU.pdf" download>
                CV
              </a>
          </button>
        }
        {i18n.language === "en" && 
          <button>
              <a href="/MyCV/CV_ENG_BOG_Tom_Pujalte.pdf" download>
                Resume
              </a>
          </button>
        }
        {i18n.language === "es" && 
          <button>
              <a href="/MyCV/CV_ESP_BOG_Tom_Pujalte.pdf" download>
                Hoja de vida
              </a>
          </button>
        }
        <br />
        <span className="last-span">
          {t('experience.socials')}
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
