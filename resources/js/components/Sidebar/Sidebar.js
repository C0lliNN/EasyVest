import PropTypes from 'prop-types';
import React from 'react';
import styles from './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = (props) => (
  <div className={styles.Sidebar}>
    <ul className="collection">
      <li className="collection-item">
        <form onSubmit={props.searchHandler} className={styles.SearchBox}>
          <input
            type="text"
            placeholder={props.searchPlaceholder}
            ref={props.searchInputRef}
          />
          <button className={`btn ${styles.SearchButton} z-depth-0`}>
            <i className="material-icons">search</i>
          </button>
        </form>
      </li>

      {props.links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={`collection-item ${styles.Option}`}
          activeClassName={styles.Active}
          exact
        >
          {link.text}
          <span className={`secondary-content ${link.iconColor}`}>
            <i className="material-icons">{link.icon}</i>
          </span>
        </NavLink>
      ))}
    </ul>
    <div className="my-3">
      <Link
        to={props.createLink.path}
        className={`btn ${styles.CreateButton} z-depth-0`}
      >
        {props.createLink.text}
      </Link>
    </div>
  </div>
);
Sidebar.propTypes = {
  createLink: PropTypes.shape({
    path: PropTypes.string,
    text: PropTypes.string,
  }),
  links: PropTypes.array,
  searchHandler: PropTypes.func,
  searchInputRef: PropTypes.any,
  searchPlaceholder: PropTypes.string,
};

export default React.memo(Sidebar);
