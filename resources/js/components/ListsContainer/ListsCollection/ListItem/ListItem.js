import PropTypes from 'prop-types';
import React from 'react';
import styles from './ListItem.scss';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const list = props.list;

  const relations = list.relations.map((user) => user.pivot.relation);

  return (
    <li className={`collection-item ${styles.ListItem}`}>
      <Link to={`/lists/${list.id}`} className={`truncate ${styles.Title}`}>
        {list.title}
      </Link>
      <p className={styles.Subject}>
        <i className="material-icons">book</i>
        <span>{list.subject.name}</span>
      </p>
      <div>
        <p className={styles.Questions}>
          <i className="material-icons">question_answer</i>
          <span>{list.questions.length} Questões</span>
        </p>
        <p className={styles.Icons}>
          {relations.includes('answer') && (
            <button
              className="tooltipped"
              data-position="bottom"
              data-tooltip="Lista Respondida"
            >
              <i className="material-icons green-text">check</i>
            </button>
          )}
          {relations.includes('owner') && (
            <React.Fragment>
              <button
                className="tooltipped"
                data-position="bottom"
                data-tooltip="Editar"
                onClick={() => props.editListHandler(list.id)}
              >
                <i className="material-icons blue-text">edit</i>
              </button>
              <button
                className="tooltipped"
                data-position="bottom"
                data-tooltip="Excluir"
                onClick={() => props.deleteListHandler(list.id)}
              >
                <i className="material-icons red-text">delete</i>
              </button>
            </React.Fragment>
          )}
          {relations.includes('bookmark') ? (
            <button
              className="tooltipped"
              data-position="bottom"
              data-tooltip="Remover dos Favoritos"
              onClick={() => props.unbookmarkListHandler(list.id)}
            >
              <i className="material-icons yellow-text text-darken-1">star</i>
            </button>
          ) : (
            <button
              className="tooltipped"
              data-position="bottom"
              data-tooltip="Adicionar aos Favoritos"
              onClick={() => props.bookmarkListHandler(list.id)}
            >
              <i className="material-icons yellow-text text-darken-1">stars</i>
            </button>
          )}
        </p>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  bookmarkListHandler: PropTypes.func,
  bookmarkQuestionHandler: PropTypes.func,
  deleteListHandler: PropTypes.func,
  editListHandler: PropTypes.func,
  list: PropTypes.shape({
    id: PropTypes.any,
    questions: PropTypes.array,
    relations: PropTypes.array,
    subject: PropTypes.shape({
      name: PropTypes.string,
    }),
    title: PropTypes.string,
  }),
  unbookmarkListHandler: PropTypes.func,
  unbookmarkQuestionHandler: PropTypes.func,
};

export default ListItem;
