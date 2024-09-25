import reactLogo from "../../logos/react.png"
import javascriptLogo from "../../logos/javascript.png"
import sassLogo from "../../logos/sass.png"
import bootstrapLogo from "../../logos/bootstrap.png"
import htmlLogo from "../../logos/html5.png"
import cssLogo from "../../logos/css3.png"
import reduxLogo from "../../logos/redux.png"
import nodeLogo from "../../logos/nodejs.png"
import mySQLLogo from "../../logos/mysql.png"
import wealthHealth from "../../projects pictures/wealth-health.png"
import argentBank from "../../projects pictures/argentBank.png"
import socialMedia from "../../projects pictures/socialMedia.png"
import "./works.scss"
import sportsee from "../../projects pictures/sportsee.png"
import kasa from "../../projects pictures/kasa.png"
import petitsPlats from "../../projects pictures/petits-plats.png"
import fisheye from "../../projects pictures/fisheye.png"
import WorkCardLeft from "../Work Cards/WorkCardsLeft"
import WorkCardRight from "../Work Cards/WorkCardsRight"

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useTranslation } from "react-i18next"

gsap.registerPlugin(ScrollTrigger);

function Works() {

  const sectionRef = useRef();
  const tl = useRef();
  const { t } = useTranslation();

  useGSAP(() => {

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".works-title",
        start: 'top 75%',
        end: 'bottom top'
      }
    })
    .fromTo(".works-title", {
      y: 40,
      opacity: 0,
    }, {
      y: 0, 
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    })

  }, [], sectionRef)

  return (
    <section id="works" ref={sectionRef}>
      <h2 className="works-title">{t('works.title')}</h2>
      <WorkCardRight picture={socialMedia} title="SocialMedia" text={t('works.social_media')} link="https://github.com/MahavishnuT/social-media-fullstack" logo1={reactLogo} logo2={mySQLLogo} logo3={nodeLogo}/>
      <WorkCardLeft picture={wealthHealth} title="Wealth Health" text={t('works.wealth_health')} link="https://mahavishnut.github.io/Projet_14" logo1={reactLogo} logo2={sassLogo} logo3={reduxLogo}/>
      <WorkCardRight picture={argentBank} title="ArgentBank" text={t('works.argent_bank')} link="https://mahavishnut.github.io/Projet_13" logo1={reactLogo} logo2={sassLogo} logo3={reduxLogo}/>
      <WorkCardLeft picture={sportsee} title="Sportsee" text={t('works.sportsee')} link="https://mahavishnut.github.io/Projet_12" logo1={reactLogo} logo2={sassLogo}/>
      <WorkCardRight picture={kasa} title="Kasa" text={t('works.kasa')} link="https://mahavishnut.github.io/Projet_11/" logo1={reactLogo} logo2={sassLogo}/>
      <WorkCardLeft picture={petitsPlats} title="Les Petits Plats" text={t('works.petits_plats')} link="https://mahavishnut.github.io/Projet_7" logo1={htmlLogo} logo2={bootstrapLogo} logo3={javascriptLogo}/>
      <WorkCardRight picture={fisheye} title="FishEye" text={t('works.fisheye')} link="https://mahavishnut.github.io/Projet_6" logo1={htmlLogo} logo2={cssLogo} logo3={javascriptLogo}/>
    </section>
  )
}

export default Works