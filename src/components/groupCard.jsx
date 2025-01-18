/* eslint-disable react/prop-types */

import parse from 'html-react-parser';

const GroupCard = ({ children, id, groupName, description }) => {
  return (
    <div
      className='card shadow-sm h-100'
    >
      <div
        className='card-top border-bottom'
      >
        <div className='d-flex justify-content-evenly align-items-center my-4'>
        {children}
        </div>
      </div>
      <div className='card-body d-flex flex-column'>
        <h5 className='card-title'>{groupName}</h5>
        <p className='card-text'>
          {parse(description)}
        </p>
        <a
          href={`/#${id}`}
          className='btn btn-danger mt-auto align-self-start'
        >
          Risultati
        </a>
      </div>
    </div>
  );
};

export default GroupCard;
