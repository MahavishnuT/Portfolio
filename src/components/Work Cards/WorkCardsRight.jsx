import "./workcardsright.scss"

function WorkCardRight({picture, title, text, link, logo1, logo2, logo3, logo4}) {
  return (
    <div className="card-container_right">
      <img src={picture} alt="" className="card-img" />
      <div className="card-text">
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

export default WorkCardRight;
