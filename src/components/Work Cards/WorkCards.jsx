import "./workcards.scss"

function WorkCard({picture, title, text, logo1, logo2, logo3, logo4}) {
  return (
    <div className="card-container">
      <img src={picture} alt="" className="card-img" />
      <div className="card-text">
        <div className="card-text_title">{title}</div>
        <div className="card-text_description">{text}</div>
        <ul className="card-text_logos">
          <li><img src={logo1} alt="" /></li>
          <li><img src={logo2} alt="" /></li>
          <li><img src={logo3} alt="" /></li>
          <li><img src={logo4} alt="" /></li>
        </ul>
      </div>
    </div>
  );
}

export default WorkCard;
