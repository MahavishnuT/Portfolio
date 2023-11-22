import "./landing.scss";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const salutRef = useRef();
  const landingRef = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
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
        }, "-=0.2")
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
          duration: 2,
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
              <a href="#works">Mes travaux</a>
            </li>
            <li className="nav-element">
              <a href="#experience">Mon expérience</a>
            </li>
            <li className="nav-element">
              <a href="#about">Qui suis-je?</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hero">
        <h2 className="hero-presentation" ref={salutRef}>
          Salut, je suis
        </h2>
        <h1 className="hero-name">Tom Pujalte</h1>
        <h1 className="hero-name">Tom Pujalte</h1>
        <h1 className="hero-name">Tom Pujalte</h1>
        <span className="hero-description">Je suis développeur Front-End</span>
      </div>
      <div className="scroll-svg">scroll</div>
    </section>
  );
}

export default Landing;
