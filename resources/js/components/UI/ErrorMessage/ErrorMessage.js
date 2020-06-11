import PropTypes from "prop-types";
import React from "react";

const ErrorMessage = props => (
    <div>
        <h5 className="red-text">Um erro inesperado aconteceu</h5>
        <p>{props.message}</p>
    </div>
);

ErrorMessage.propTypes = {
    message: PropTypes.string
};

export default React.memo(ErrorMessage);
