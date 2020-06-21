import PropTypes from 'prop-types';
import React, { useState, useEffect, useReducer, useContext } from 'react';
import Select from '@bit/mui-org.material-ui.select';
import MenuItem from '@bit/mui-org.material-ui.menu-item';
import styles from './ListBuilder.scss';
import Axios from 'axios';
import { setupTooltips, setupModal } from '../../../utility';
import InputTag from '../../UI/InputTag/InputTag';
import Paginator from '../../UI/Paginator/Paginator';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import context from '../../../context';

const initialState = {
  currentPage: 1,
  lastPage: 1,
  total: 1,
};

const SETUP_PAGINATION = 'SETUP_PAGINATION';
const CHANGE_PAGE = 'CHANGE_PAGE';

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUP_PAGINATION: {
      return {
        ...state,
        currentPage: action.currentPage,
        total: action.total,
        lastPage: action.lastPage,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
        total: action.total,
        lastPage: action.lastPage,
      };
    }

    default:
      return state;
  }
};

const ListBuilder = ({ list }) => {
  const searchFromOptions = [
    {
      key: 'all',
      value: 'all',
      text: 'Todos',
    },
    {
      key: 'my-questions',
      value: 'my-questions',
      text: 'Minhas Questões',
    },
    {
      key: 'favorite',
      value: 'favorite',
      text: 'Favoritos',
    },
    {
      key: 'answers',
      value: 'answers',
      text: 'Questões Respondidas',
    },
  ];

  const [availableSubjects, setAvailableSubjects] = useState([]);
  const [title, setTitle] = useState(list ? list.title : '');
  const [description, setDescription] = useState(list ? list.description : '');
  const [listSubject, setListSubject] = useState(list ? list.subject.id : 1);
  const [listTags, setListTags] = useState(list ? list.tags.split(', ') : []);

  const [searchFrom, setSearchFrom] = useState('all');
  const [questionSubject, setQuestionSubject] = useState(1);
  const [questionTag, setQuestionTag] = useState('');
  const [statement, setStatement] = useState('');

  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [addedQuestions, setAddedQuestions] = useState(
    list ? list.questions : []
  );

  const setIsLoading = useContext(context).changeFixedSpinnerState;

  const [paginationState, dispatch] = useReducer(
    paginationReducer,
    initialState
  );

  const [modalInstance, setModalInstance] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const subjectsRequest = Axios.get('/subjects');
    const questionsRequest = Axios.get(
      '/questions?listBuilder=true&searchFrom=all&subject=1'
    );

    Axios.all([subjectsRequest, questionsRequest])
      .then(
        Axios.spread((...responses) => {
          const subjectResponse = responses[0];
          const questionsResponse = responses[1];

          if (subjectResponse.status === 200) {
            const subjects = subjectResponse.data.data;
            setAvailableSubjects(
              subjects.map((subject) => {
                return {
                  key: subject.id,
                  value: subject.id,
                  text: subject.name,
                };
              })
            );
          }

          if (questionsResponse.status === 200) {
            dispatch({
              type: SETUP_PAGINATION,
              currentPage: questionsResponse.data.meta.current_page,
              total: questionsResponse.data.meta.total,
              lastPage: questionsResponse.data.meta.last_page,
            });
            setFilteredQuestions(questionsResponse.data.data);
          }

          setupTooltips();
          const modal = document.querySelector('#modal');
          // eslint-disable-next-line
          const instance = M.Modal.init(modal, {});
          setModalInstance(instance);
        })
      )
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [Axios]);

  const handleInfoInputs = (event, setProperty) => {
    setProperty(event.target.value);
  };

  const handleInputChange = (event, setProperty) => {
    setProperty(event.target.value);

    let url = '/questions?listBuilder=true';

    if (setProperty === setSearchFrom) {
      url += `&searchFrom=${event.target.value}`;
    } else {
      url += `&searchFrom=${searchFrom}`;
    }

    if (setProperty === setQuestionSubject) {
      url += `&subject=${event.target.value}`;
    } else {
      url += `&subject=${questionSubject}`;
    }

    if (questionTag.trim()) {
      if (setProperty === setQuestionTag) {
        url += `&tag=${event.target.value}`;
      } else {
        url += `&tag=${questionTag}`;
      }
    }

    if (statement.trim()) {
      if (setProperty === setStatement) {
        url += `&statement=${event.target.value}`;
      } else {
        url += `&statement=${statement}`;
      }
    }

    if (
      setProperty === setSearchFrom ||
      setProperty === setQuestionSubject ||
      setProperty === setQuestionTag ||
      setProperty === setStatement
    ) {
      updateFilteredQuestions(url);
    }
  };

  const updateFilteredQuestions = (url) => {
    setIsLoading(true);

    Axios.get(url)
      .then((response) => {
        if (response.status === 200) {
          setFilteredQuestions(response.data.data);
        }

        dispatch({
          type: SETUP_PAGINATION,
          currentPage: response.data.meta.current_page,
          total: response.data.meta.total,
          lastPage: response.data.meta.last_page,
        });
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleAddQuestionToList = (question) => {
    setAddedQuestions((prevState) => {
      return prevState.concat({ ...question });
    });
  };

  const handleRemoveQuestionFromList = (question) => {
    setAddedQuestions((prevState) => {
      return prevState.filter(
        (addedQuestion) => addedQuestion.id !== question.id
      );
    });
  };

  const handleChangePage = (page) => {
    const url = `/questions?listBuilder=true&searchFrom=${searchFrom}&subject=${questionSubject}&tag=${questionTag}&statement=${statement}&page=${page}`;

    updateFilteredQuestions(url);
  };

  const handleCreateList = () => {
    let errorFounded = false;
    let errorMessage = '';
    if (!title.trim()) {
      errorFounded = true;
      errorMessage = "O Campo 'Título' Precisa ser preenchido";
    }
    if (!errorFounded && !description.trim()) {
      errorFounded = true;
      errorMessage = "O Campo 'Descrição' Precisa ser preenchido";
    }
    if (!errorFounded && !listTags.length) {
      errorFounded = true;
      errorMessage = 'Ao menos uma tag precisa ser adicionada à lista';
    }
    if (!errorFounded && addedQuestions.length < 2) {
      errorFounded = true;
      errorMessage = 'Pelo menos duas questões precisam ser adicionadas';
    }

    if (errorFounded) {
      setupModal('Erro no Formulário', 'red-text', errorMessage);
      modalInstance.open();
    } else {
      const payload = {
        title: title,
        description: description,
        tags: listTags.join(', '),
        subject: listSubject,
        questions: addedQuestions.map((question) => question.id),
      };

      setIsLoading(true);

      let request = null;

      if (list) {
        request = Axios.put(`/lists/${list.id}`, payload);
      } else {
        request = Axios.post('/lists', payload);
      }

      request
        .then((response) => {
          if (response.status === 200) {
            const operation = list ? 'atualizada' : 'criada';

            setupModal(
              'Sucesso!',
              'green-text',
              `Sua lista foi ${operation} com sucesso e já está disponível em 'Minhas Listas'`
            );
            modalInstance.open();
          }
        })
        .catch((error) => {
          console.error(error);
          setupModal(
            'Sucesso!',
            'red-text',
            'Algo inesperado aconteceu e sua lista não pode ser criada. Tente novamente mais tarde'
          );
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  let filteredQuestionsContent = null;

  if (filteredQuestions.length) {
    filteredQuestionsContent = filteredQuestions
      .filter(
        (question) =>
          addedQuestions.findIndex(
            (addedQuestion) => addedQuestion.id === question.id
          ) < 0
      )
      .map((question) => {
        const auxDiv = document.createElement('div');
        auxDiv.innerHTML = question.content;
        const questionContent = auxDiv.innerText;
        return (
          <li
            key={question.id}
            className={`collection-item ${styles.QuestionItem}`}
          >
            <a
              href={`/questions/${question.id}`}
              target="_blank"
              rel="noreferrer"
              className="truncate"
            >
              {questionContent}
            </a>
            <button
              className={`secondary-content green-text tooltipped ${styles.IconButton}`}
              onClick={() => handleAddQuestionToList(question)}
              data-position="bottom"
              data-tooltip="Adicionar Questão à Lista"
            >
              <i className="material-icons">add_box</i>
            </button>
          </li>
        );
      });
  } else {
    filteredQuestionsContent = (
      <li className="collection-item">Nenhuma questão foi encontrada</li>
    );
  }

  let addedQuestionsContent = null;

  if (addedQuestions.length) {
    addedQuestionsContent = addedQuestions.map((question) => {
      const auxDiv = document.createElement('div');
      auxDiv.innerHTML = question.content;
      const questionContent = auxDiv.innerText;
      return (
        <li
          key={question.id}
          className={`collection-item ${styles.QuestionItem}`}
        >
          <a href={`/questions/${question.id}`} className="truncate">
            {questionContent}
          </a>
          <button
            className={`secondary-content red-text tooltipped ${styles.IconButton}`}
            onClick={() => handleRemoveQuestionFromList(question)}
            data-position="bottom"
            data-tooltip="Remover Questão da Lista"
          >
            <i className="material-icons">delete</i>
          </button>
        </li>
      );
    });
  } else {
    addedQuestionsContent = (
      <li className="collection-item">Nenhuma Questão foi adicionada</li>
    );
  }

  return (
    <div className={styles.ListBuilder}>
      {error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <div>
          <h4>Informações sobre a Lista</h4>

          <label htmlFor="title">Título</label>
          <input
            id="title"
            value={title}
            onChange={(event) => handleInfoInputs(event, setTitle)}
            placeholder="Título da Lista"
            className={`browser-default ${styles.Input}`}
          />
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => handleInfoInputs(event, setDescription)}
            placeholder="Descrição da Lista"
            className={`materialize-textarea ${styles.Input}`}
          />
          <div className={styles.FormGroup}>
            <label htmlFor="">Matéria</label>
            <Select
              className={styles.Select}
              value={listSubject}
              onChange={(event) => handleInfoInputs(event, setListSubject)}
            >
              {availableSubjects.map((subject) => (
                <MenuItem key={subject.key} value={subject.value}>
                  {subject.text}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className={styles.FormGroup}>
            <label htmlFor="">Tags</label>
            <InputTag tags={listTags} setTags={setListTags} />
          </div>
          <h4>Adicionar Questões</h4>
          <div className={styles.FormGroup}>
            <label htmlFor="">Procurar em</label>
            <Select
              className={styles.Select}
              value={searchFrom}
              onChange={(event) => handleInputChange(event, setSearchFrom)}
            >
              {searchFromOptions.map((option) => (
                <MenuItem key={option.key} value={option.value}>
                  {option.text}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="">Matéria</label>
            <Select
              className={styles.Select}
              value={questionSubject}
              onChange={(event) => handleInputChange(event, setQuestionSubject)}
            >
              {availableSubjects.map((subject) => (
                <MenuItem key={subject.key} value={subject.value}>
                  {subject.text}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="tag">Tag</label>
            <input
              id="tag"
              placeholder="Filtrar por tags"
              className={`browser-default ${styles.Input}`}
              value={questionTag}
              onChange={(event) => handleInputChange(event, setQuestionTag)}
            />
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="content">Enunciado</label>
            <input
              id="content"
              placeholder="Filtrar pelo enunciado da Questão"
              className={`browser-default ${styles.Input}`}
              value={statement}
              onChange={(event) => handleInputChange(event, setStatement)}
            />
          </div>
          <p className={styles.Total}>
            Total:{' '}
            {
              filteredQuestions.filter(
                (question) =>
                  addedQuestions.findIndex(
                    (addedQuestion) => addedQuestion.id === question.id
                  ) < 0
              ).length
            }
          </p>
          <ul className="collection">{filteredQuestionsContent}</ul>
          <Paginator
            currentPage={paginationState.currentPage}
            lastPage={paginationState.lastPage}
            changePageHandler={handleChangePage}
          />
          <h4>Questões Adicionadas</h4>
          <p className={styles.Total}>Total: {addedQuestions.length}</p>
          <ul className="collection">{addedQuestionsContent}</ul>
          <button
            onClick={handleCreateList}
            className={`btn ${styles.CreateButton} z-depth-0`}
          >
            {list ? 'Salvar' : 'Criar'}
          </button>
        </div>
      )}
    </div>
  );
};

ListBuilder.propTypes = {
  list: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.any,
    questions: PropTypes.array,
    subject: PropTypes.shape({
      id: PropTypes.number,
    }),
    tags: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default ListBuilder;
