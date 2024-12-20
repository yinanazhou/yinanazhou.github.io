import React from 'react';
import NavLink from './NavLink';
import SocialLinks from './SocialLinks';

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} className="py-2" onClick={closeMenu}>
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
