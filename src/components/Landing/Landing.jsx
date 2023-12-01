import "./landing.scss";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'French' },
  sp: { nativeName: 'Spanish' }
};

function Landing() {
  const salutRef = useRef();
  const landingRef = useRef();
  const scrollRef = useRef();
  const tl = useRef();
  const { t, i18n } = useTranslation();

  useLayoutEffect(() => {

    //Creation of animations for the landing page as it loads
    let ctx = gsap.context(() => {

      tl.current = gsap.timeline()
        .from(".hero-presentation", {
          x: -300,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        })
        .from(".hero-name", {
          x: 1000,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2
        }, "-=0.4")
        .from(".hero-description", {
          y: 300,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.5")
        .from(".nav-element", {
          y: -200,
          opacity: 0,
          duration: 1,
          stagger: 0.2
        }, "-=0.7")
        .from(".scroll-svg", {
          opacity: 0,
          duration: 1, 
          ease: "power3.out"
        })
    }, landingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="landing" ref={landingRef}>
      <header>
        <nav className="nav-header">
          <ul>
            <li className="nav-element">
            {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
            </li>
            <li className="nav-element">
              <a href="#experience">{t('landing.nav.about')}</a>
            </li>
            <li className="nav-element">
              <a href="#works">{t('landing.nav.works')}</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hero">
        <h2 className="hero-presentation" ref={salutRef}>
          {t('landing.hero.presentation')}
        </h2>
        <h1 className="hero-name">Tom Pujalte</h1>
        <h1 className="hero-name">Tom Pujalte</h1>
        <h1 className="hero-name">Tom Pujalte</h1>
        <span className="hero-description">{t('landing.hero.description')}</span>
      </div>
      <div className="scroll-svg" ref={scrollRef}>scroll</div>
    </section>
  );
}

export default Landing;
