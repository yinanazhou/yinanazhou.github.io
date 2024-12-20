import React from 'react';

const WorkCard = ({ title, company, date, location, description }) => {
  return (
    <div>
      <div className="rounded-xl mt-3 card-bg py-6 px-2 md:px-6 shadow-md shadow-neutral-500/30">
        <div className="header flex flex-col mb-4">
          <div className="first-line flex flex-col lg:flex-row justify-between txt-color-primary">
            <h5 className="text-xl font-semibold">{title}</h5>
            <h5 className="text-xl font-semibold">{date}</h5>
          </div>
          <div className="second-line flex flex-col lg:flex-row justify-between txt-color-secondary">
            <h6 className="text-lg italic">{company}</h6>
            <h6 className="text-lg italic">{location}</h6>
          </div>
        </div>
        <div className="txt-color-secondary md:text-justify">{description}</div>
      </div>
    </div>
  );
};

export default WorkCard;
