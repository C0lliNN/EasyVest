import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import styles from './Question.scss';

const Question = (props) => {
  const { question, correct } = props;

  const questionRef = useRef();

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

  const alternatives = alternativesData.map((alternative) => {
    let className = '';

    if (props.correct) {
      let isSomeAlternativeChecked = false;

      alternativesData
        .map((item) => item.ref)
        .forEach((ref) => {
          if (ref.current && ref.current.checked) {
            isSomeAlternativeChecked = true;
            questionRef.current.setAttribute('answered', '');
          }
        });

      if (isSomeAlternativeChecked) {
        if (alternative.ref.current && alternative.ref.current.checked) {
          className = styles.Red;
        }

        if (question.correctAlternative === alternative.value) {
          className = styles.Green;
        }
      }
    }

    if (!alternative.text) {
      return null;
    }

    return (
      <div className={styles.Alternative} key={alternative.value}>
        <label>
          <input
            name={`alternative${question.id}`}
            type="radio"
            value={alternative.value}
            ref={alternative.ref}
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

  if (props.correct && props.registerAnswerHandler) {
    props.registerAnswerHandler();
  }

  return (
    <article className={styles.Question} ref={questionRef}>
      <div
        className={styles.Content}
        dangerouslySetInnerHTML={{ __html: question.content }}
      ></div>
      {alternatives}
    </article>
  );
};

Question.propTypes = {
  correct: PropTypes.any,
  question: PropTypes.shape({
    alternativeA: PropTypes.any,
    alternativeB: PropTypes.any,
    alternativeC: PropTypes.any,
    alternativeD: PropTypes.any,
    alternativeE: PropTypes.any,
    content: PropTypes.any,
    correctAlternative: PropTypes.any,
    id: PropTypes.any,
  }),
  registerAnswerHandler: PropTypes.func,
};

export default Question;
