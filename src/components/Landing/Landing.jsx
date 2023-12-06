import "./landing.scss";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const lngs = {
  en: { nativeName: 'en' },
  fr: { nativeName: 'fr' },
  es: { nativeName: 'es' }
};

function Landing() {
  const salutRef = useRef();
  const landingRef = useRef();
  const scrollRef = useRef();
  const tl = useRef();
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

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
        .from(".dropdown", {
          y: -200,
          opacity: 0,
          duration: 1,
          stagger: 0.2
        }, "-=0.7")
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
          <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>{selectedOption || i18n.resolvedLanguage}</button>
            {isOpen && (
              <ul className="dropdown-list">
                {Object.keys(lngs).map((lng) => (
                  <li key={lng} type="submit" onClick={() => { i18n.changeLanguage(lng); handleOptionClick(lngs[lng].nativeName) }}>
                    {lngs[lng].nativeName}                    
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className="nav-header_list">
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
