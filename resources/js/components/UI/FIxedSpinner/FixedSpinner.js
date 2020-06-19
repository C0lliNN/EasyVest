import React from 'react';
import styles from './FixedSpinner.scss';

const FixedSpinner = () => (
  <div className={`progress ${styles.FixedSpinner}`}>
    <div className="indeterminate"></div>
  </div>
);

export default React.memo(FixedSpinner);
