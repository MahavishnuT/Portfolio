import "./workcardsleft.scss"
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function WorkCardLeft({picture, title, text, link, logo1, logo2, logo3, logo4}) {
  const containerRef = useRef();
  const tl = useRef();

  useGSAP(() => {

    //Creation of a loop for each container so that not all containers animate when the first one triggers
    const imgContainersLeft = gsap.utils.toArray(".card-img_container_left");
    imgContainersLeft.forEach(container => {

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 60%',
          end: 'bottom top',
          markers: true,
          scrub: false
        }
      })
      .fromTo(".card-img_fill_left_1", {
        scale: 1,
      }, {
        scale: 10,
        duration: 3,
        ease: "power3.out",
      })
      .fromTo(".card-img_fill_left_2", {
        x: "0%",
      }, {
        x: "100%",
        duration: 3,
        ease: "power3.out",
      })
      .fromTo(container, {
        x: -1000,
      }, {
        x: 0,
        duration: 3,
        ease: "power3.out",
      })
      .fromTo(".card-text_left", {
        x: -1000,
      }, {
        x: 0,
        duration: 3,
        ease: "power3.out",
      })
    })

  }, [], containerRef)

  return (
    <div className="card-container_left" ref={containerRef}>
      <div className="card-img_container card-img_container_left">
        <div className="card-img_fill card-img_fill_left_1"></div>
        <div className="card-img_fill card-img_fill_left_2"></div>
        <img src={picture} alt="" className="card-img" />
      </div>
      <div className="card-text card-text_left">
        <div className="card-text_title">{title}</div>
        <div className="card-text_description">{text}</div>
        <div className="card-text_logos_github">
          <button className="github-button">
            <a href={link} target="_blank" rel="noreferrer">GitHub</a>
          </button>
          <ul className="logos">
            {logo1 && <li><img src={logo1} alt="logo of the tech used" /></li>}
            {logo2 && <li><img src={logo2} alt="logo of the tech used" /></li>}
            {logo3 && <li><img src={logo3} alt="logo of the tech used" /></li>}
            {logo4 && <li><img src={logo4} alt="logo of the tech used" /></li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkCardLeft;
