import React from 'react';
import styles from './Spinner.scss';
const Spinner = () => <div className={styles.Spinner}>Loading...</div>;

export default React.memo(Spinner);
