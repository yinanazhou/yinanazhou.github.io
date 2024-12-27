import React from 'react';

const CardTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'txt-color-p border-primary-700'
    : 'txt-color-p border-neutral-300 hover:border-neutral-400 dark:hover:border-white';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default CardTag;
