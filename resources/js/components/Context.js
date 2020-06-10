import React from "react";

export const initialState = {
    userId: document.querySelector("#user_id").value
};

const Context = React.createContext(initialState);

export default Context;
