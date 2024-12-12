import React from 'react';
import NavLink from './NavLink';
import SocialLinks from './SocialLinks';

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <li>
        <SocialLinks />
      </li>
    </ul>
  );
};

export default MenuOverlay;
