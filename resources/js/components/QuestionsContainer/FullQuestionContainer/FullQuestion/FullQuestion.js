import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import styles from './FullQuestion.scss';

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
        className = styles.Red;
      }

      if (question.correctAlternative === alternative.value) {
        className = styles.Green;
      }
    }

    if (!alternative.text) {
      return null;
    }

    return (
      <div className={styles.Alternative} key={alternative.value}>
        <label>
          <input
            name="alternative"
            type="radio"
            value={alternative.value}
            ref={alternative.ref}
            onChange={handleOnChange}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: alternative.text,
            }}
            className={className}
          ></div>
        </label>
      </div>
    );
  });

  if (props.correct) {
    props.registerAnswerHandler(
      props.selectedAlternative === question.correctAlternative
    );
  }

  return (
    <article className={styles.FullQuestion}>
      <div
        className={styles.Content}
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
  registerAnswerHandler: PropTypes.func,
  selectedAlternative: PropTypes.any,
  setSelectedAlternative: PropTypes.func,
};

export default FullQuestion;
