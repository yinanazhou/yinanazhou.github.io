import React from 'react';

const EducationCard = ({ university, degree, date, location, description }) => {
  return (
    <div>
      <div className="header flex flex-col mb-4">
        <div className="first-line flex flex-col lg:flex-row justify-between txt-color-primary">
          <h5 className="text-xl font-semibold">{university}</h5>
          <h5 className="text-xl font-semibold">{date}</h5>
        </div>
        <div className="second-line flex flex-col lg:flex-row justify-between txt-color-secondary">
          <h6 className="text-lg italic">{degree}</h6>
          <h6 className="text-lg italic">{location}</h6>
        </div>
      </div>
      <div className="txt-color-secondary">{description}</div>
    </div>
  );
};

export default EducationCard;
