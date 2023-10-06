import "./landing.scss";

function Landing() {
  return (
    <section id="landing">
      <header>
        <nav className="nav-header">
          <ul>
            <li className="nav-element">
              <a href="#my-work">Mes travaux</a>
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
        <h2 className="hero-presentation">Salut, je suis</h2>
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
