import React from 'react';

export const initialState = {
  isFixedSpinnerAppearing: false,
  changeSpinnerState: () => {},
};

const context = React.createContext(initialState);

export default context;
