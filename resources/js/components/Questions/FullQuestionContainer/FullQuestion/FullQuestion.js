import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

const FullQuestion = (props) => {
    const { question, correct } = props;

    const alternativesData = [
        {
            ref: useRef(),
            text: question.alternativeA,
            value: 'a',
        },
        {
            ref: useRef(),
            text: question.alternativeB,
            value: 'b',
        },
        {
            ref: useRef(),
            text: question.alternativeC,
            value: 'c',
        },
        {
            ref: useRef(),
            text: question.alternativeD,
            value: 'd',
        },
        {
            ref: useRef(),
            text: question.alternativeE,
            value: 'e',
        },
    ];

    useEffect(() => {
        if (correct) {
            for (const alternative of alternativesData) {
                const input = alternative.ref.current;
                if (input) {
                    input.checked = false;
                }
            }
        }
    }, [correct]);

    const handleOnChange = (event) => {
        props.setSelectedAlternative(event.target.value);
    };

    const alternatives = alternativesData.map((alternative) => {
        let className = '';

        if (props.correct) {
            if (props.selectedAlternative === alternative.value) {
                className = 'red';
            }

            if (question.correctAlternative === alternative.value) {
                className = 'green';
            }
        }

        if (!alternative.text) {
            return null;
        }

        return (
            <p className="alternative" key={alternative.value}>
                <label>
                    <input
                        name="alternative"
                        type="radio"
                        value={alternative.value}
                        ref={alternative.ref}
                        onChange={handleOnChange}
                    />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: alternative.text,
                        }}
                        className={className}
                    ></p>
                </label>
            </p>
        );
    });

    return (
        <article className="question">
            <div
                className="question-content"
                dangerouslySetInnerHTML={{ __html: question.content }}
            ></div>
            {alternatives}
        </article>
    );
};

FullQuestion.propTypes = {
    correct: PropTypes.any,
    question: PropTypes.shape({
        alternativeA: PropTypes.any,
        alternativeB: PropTypes.any,
        alternativeC: PropTypes.any,
        alternativeD: PropTypes.any,
        alternativeE: PropTypes.any,
        content: PropTypes.any,
        correctAlternative: PropTypes.any,
    }),
    selectedAlternative: PropTypes.any,
    setSelectedAlternative: PropTypes.func,
};

export default FullQuestion;
