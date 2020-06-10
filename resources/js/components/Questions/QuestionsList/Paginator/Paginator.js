import PropTypes from "prop-types";
import React from "react";

const Paginator = (props) => {
    if (props.lastPage <= 1) {
        return null;
    }

    const buttons = [];

    for (let i = 1; i <= props.lastPage; i++) {
        let classes = ["button"];
        if (props.currentPage === i) {
            classes.push("active");
        }
        buttons.push(
            <button
                onClick={() => props.changePageHandler(i)}
                className={classes.join(" ")}
            >
                {i}
            </button>
        );
    }

    return <div className="paginator">{buttons}</div>;
};

Paginator.propTypes = {
    changePageHandler: PropTypes.func,
    currentPage: PropTypes.any,
    lastPage: PropTypes.any,
};

export default Paginator;
