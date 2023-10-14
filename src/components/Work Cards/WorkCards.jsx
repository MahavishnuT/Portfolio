function WorkCard(picture, title, text, position) {
  return (
    <div className="card-container">
      <img src="picture" alt="" className="card-img" />
      <div className="card-text">
        <div className="card-text_title">${title}</div>
        <div className="card-text_description">${text}</div>
      </div>
    </div>
  );
}

export default WorkCard;
