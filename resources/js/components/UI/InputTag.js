import PropTypes from "prop-types";
import React, { useRef } from "react";

const InputTag = ({ tags, setTags }) => {
    const inputRef = useRef();

    const removeTag = i => {
        const newTags = tags.filter((tag, index) => i != index);
        setTags(newTags);
    };

    const inputKeyDown = e => {
        const val = e.target.value;
        if (e.key === "Enter" && val) {
            if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setTags(tags.concat([val]));
            inputRef.current.value = "";
        } else if (e.key === "Backspace" && !val) {
            removeTag(tags.length - 1);
        }
    };

    return (
        <div className="input-tag">
            <ul className="input-tag__tags">
                {tags.map((tag, i) => (
                    <li key={tag}>
                        {tag}
                        <button
                            type="button"
                            onClick={() => {
                                removeTag(i);
                            }}
                        >
                            <i className="material-icons">clear</i>
                        </button>
                    </li>
                ))}
                <li className="input-tag__tags__input">
                    <input
                        type="text"
                        onKeyDown={inputKeyDown}
                        ref={inputRef}
                    />
                </li>
            </ul>
        </div>
    );
};

InputTag.propTypes = {
    setTags: PropTypes.func,
    tags: PropTypes.array
};

export default InputTag;
