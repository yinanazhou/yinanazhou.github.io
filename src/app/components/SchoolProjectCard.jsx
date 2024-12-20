import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const SchoolProjectCard = ({ title, description, gitUrl }) => {
  return (
    <div>
      <div className="rounded-b-xl py-2 px-4">
        <h5 className="txt-color-primary text-xl font-semibold mb-2">
          {title}
        </h5>
        {gitUrl && (
          <div className="flex items-center mb-2">
            <Link href={gitUrl} target="_blank">
              <FaGithub
                className="txt-color-primary transition-transform hover:scale-110"
                size={30}
              />
            </Link>
          </div>
        )}
        <div className="txt-color-secondary">{description}</div>
      </div>
    </div>
  );
};

export default SchoolProjectCard;
