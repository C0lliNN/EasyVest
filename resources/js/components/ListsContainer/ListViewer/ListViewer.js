import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styles from './ListViewer.scss';
import Axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Question from '../../QuestionsContainer/QuestionViewer/Question/Question';
import InfoBar from '../../QuestionsContainer/QuestionViewer/InfoBar/InfoBar';

const ListViewer = () => {
  const match = useRouteMatch();
  const listId = match.params.list;

  const [correct, setCorrect] = useState(false);

  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const relations = list
    ? list.relations.map((relation) => relation.pivot.relation)
    : null;

  useEffect(() => {
    setIsLoading(true);

    Axios.get(`/lists/${listId}`)
      .then((response) => {
        if (response.status === 200) {
          setList(response.data.data);
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [listId]);

  const correctList = () => {
    setCorrect(true);
  };

  const resetList = () => {
    setCorrect(false);
  };

  let content = null;

  if (isLoading) {
    content = <Spinner />;
  } else if (error) {
    content = <ErrorMessage message={error.message} />;
  } else if (list) {
    content = (
      <div>
        <h3>{list.title}</h3>
        {list.questions.map((question) => {
          return (
            <Question key={question.id} question={question} correct={correct} />
          );
        })}
        <div className={styles.WithMargin}>
          <button
            className={`btn ${styles.BtnGreen} z-depth-0`}
            onClick={correctList}
          >
            <i className="material-icons left">check</i>
            Responder
          </button>
          {correct && (
            <button
              className={`btn ${styles.BtnOrange} z-depth-0`}
              onClick={resetList}
            >
              <i className="material-icons left">refresh</i>
              Restaurar
            </button>
          )}
          <InfoBar
            ownerName={list.owner.name}
            ownerId={list.owner.id}
            ownerImage={list.owner.image}
            subject={list.subject.name}
            tags={list.tags}
            isOwner={relations && relations.includes('owner')}
            isAnswered={relations && relations.includes('answer')}
            isBookmarked={relations && relations.includes('bookmark')}
            isList={true}
            numberOfQuestions={list.questions.length}
          />
        </div>
      </div>
    );
  }

  return <div className={`${styles.ListViewer} container`}>{content}</div>;
};

export default ListViewer;
