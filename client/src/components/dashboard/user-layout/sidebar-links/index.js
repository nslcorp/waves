import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SidebarLinks = ({ links, title }) => (
  <Fragment>
    <h2>{title}</h2>
    <div className="links">
      {links.map(link => (
        <Link key={link.to} to={link.to}>
          {link.name}
        </Link>
      ))}
    </div>
  </Fragment>
);

SidebarLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.string.isRequired
};

export default SidebarLinks;
