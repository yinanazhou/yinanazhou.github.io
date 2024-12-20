import React from 'react';
import Link from 'next/link';
import { HiCodeBracket, HiOutlineEye } from 'react-icons/hi2';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl mt-3 card-bg shadow-md shadow-neutral-500/30 md:min-h-[520px]">
      <div
        className="h-52 md:h-72 rounded-t-xl  relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {(gitUrl || previewUrl) && (
          <div className="overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            {gitUrl && (
              <Link
                href={gitUrl}
                target="_blank"
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <HiCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </Link>
            )}

            {previewUrl && (
              <Link
                href={previewUrl}
                target="_blank"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <HiOutlineEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="rounded-b-xl py-2 px-4">
        <h5 className="txt-color-primary text-xl font-semibold mb-2">
          {title}
        </h5>
        <div className="txt-color-secondary">{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
