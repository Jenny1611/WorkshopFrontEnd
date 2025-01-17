/* eslint-disable react/prop-types */

const GroupCard = ({ difficulty, imageSrc, title, text }) => {
  return (
    <div
      id={difficulty}
      className="card"
    >
      <img
        className="card-img-top"
        src={imageSrc}
        alt="Anteprima progetto"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a
          href={`/#${difficulty}`}
          className="btn btn-danger"
        >
          See project
        </a>
      </div>
    </div>
  );
};

export default GroupCard;
