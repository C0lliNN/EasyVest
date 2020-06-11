import PropTypes from 'prop-types';
import React from 'react';
import styles from './Paginator.scss';

const Paginator = (props) => {
  if (props.lastPage <= 1) {
    return null;
  }

  const buttons = [];

  for (let i = 1; i <= props.lastPage; i++) {
    let classes = '';
    if (props.currentPage === i) {
      classes = styles.Active;
    }
    buttons.push(
      <button
        key={i}
        onClick={() => props.changePageHandler(i)}
        className={classes}
      >
        {i}
      </button>
    );
  }

  return <div className={styles.Paginator}>{buttons}</div>;
};

Paginator.propTypes = {
  changePageHandler: PropTypes.func,
  currentPage: PropTypes.any,
  lastPage: PropTypes.any,
};

export default Paginator;
