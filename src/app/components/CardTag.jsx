import React from 'react';

const CardTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'txt-color-p border-primary-500'
    : 'txt-color-p border-neutral-300 hover:border-neutral-400 dark:hover:border-white';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default CardTag;
