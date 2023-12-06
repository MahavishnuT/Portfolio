import "./workcardsright.scss"
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function WorkCardRight({picture, title, text, link, logo1, logo2, logo3, logo4}) {
  const containerRef = useRef();
  const tl = useRef();

  useGSAP(() => {

    //Creation of a loop for each container so that not all containers animate when the first one triggers
    const imgContainersRight = gsap.utils.toArray(".card-img_container_right");
    imgContainersRight.forEach(container => {

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 55%',
          end: 'bottom top'
        }
      })
      .fromTo(container, {
        x: 1000,
      }, {
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .fromTo(".card-text_title_right", {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4")
      .fromTo(".card-text_description_right", {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.8")
      .fromTo(".logo-right", {
        y: 40,
        opacity:0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.4")
      .fromTo(".github-button_right", {
        y: 40,
        opacity:0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
    })

  }, [], containerRef)
  return (
    <div className="card-container_right" ref={containerRef}>
      <div className="card-img_container card-img_container_right">
        <img src={picture} alt="" className="card-img" />
      </div>
      <div className="card-text card-text_right">
        <div className="card-text_title card-text_title_right">{title}</div>
        <div className="card-text_description card-text_description_right">{text}</div>
        <div className="card-text_logos_github card-text_logos_github_right">
          <button className="github-button github-button_right">
            <a href={link} target="_blank" rel="noreferrer">Live Site</a>
          </button>
          <ul className="logos">
            {logo1 && <li className="logo-right"><img src={logo1} alt="logo of the tech used" /></li>}
            {logo2 && <li className="logo-right"><img src={logo2} alt="logo of the tech used" /></li>}
            {logo3 && <li className="logo-right"><img src={logo3} alt="logo of the tech used" /></li>}
            {logo4 && <li className="logo-right"><img src={logo4} alt="logo of the tech used" /></li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkCardRight;
