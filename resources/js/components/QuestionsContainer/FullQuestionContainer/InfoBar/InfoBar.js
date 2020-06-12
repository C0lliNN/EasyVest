import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import React from 'react';
import styles from './InfoBar.scss';

const InfoBar = (props) => {
  return (
    <div className={styles.InfoBar}>
      <h4>
        <Avatar color="green" name={props.ownerName} size="40" round />
        &nbsp;&nbsp;por{' '}
        <a href={`/profile/${props.ownerId}`} target="_blank" rel="noreferrer">
          {props.ownerName}
        </a>{' '}
      </h4>
      <div className={styles.Category}>
        <strong>Categoria: </strong>
        <span>{props.subject}</span>
      </div>
      <div className={styles.Tags}>
        <strong>Tags: </strong>
        <span>{props.tags}</span>
      </div>
      <div className={styles.FlexBox}>
        <p>
          <span className="green-text">65%</span> acertaram essa questão
        </p>
        <div>
          {props.isAnswered && (
            <button
              className={`${styles.IconButton} green-text tooltipped`}
              data-position="bottom"
              data-tooltip="Questão Respondida"
            >
              <i className="material-icons">check</i>
            </button>
          )}
          {props.isBookmarked ? (
            <button
              className={`${styles.IconButton} yellow-text text-darken-2 tooltipped`}
              onClick={() => props.toggleBookmarkHandler(false)}
              data-position="bottom"
              data-tooltip="Remover dos Favoritos"
            >
              <i className="material-icons">star</i>
            </button>
          ) : (
            <button
              className={`${styles.IconButton} yellow-text text-darken-2 tooltipped`}
              onClick={() => props.toggleBookmarkHandler(true)}
              data-position="bottom"
              data-tooltip="Adicionar aos Favoritos"
            >
              <i className="material-icons">stars</i>
            </button>
          )}
          {props.isOwner && (
            <React.Fragment>
              <button
                className={`${styles.IconButton} blue-text tooltipped`}
                onClick={props.editQuestionHandler}
                data-position="bottom"
                data-tooltip="Editar"
              >
                <i className="material-icons">edit</i>
              </button>
              <button
                className={`${styles.IconButton} red-text tooltipped`}
                onClick={props.deleteQuestionHandler}
                data-position="bottom"
                data-tooltip="Excluir"
              >
                <i className="material-icons">delete</i>
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

InfoBar.propTypes = {
  deleteQuestionHandler: PropTypes.any,
  editQuestionHandler: PropTypes.any,
  isAnswered: PropTypes.any,
  isBookmarked: PropTypes.any,
  isOwner: PropTypes.any,
  ownerId: PropTypes.any,
  ownerName: PropTypes.any,
  subject: PropTypes.any,
  tags: PropTypes.any,
  toggleBookmarkHandler: PropTypes.func,
};

export default InfoBar;
