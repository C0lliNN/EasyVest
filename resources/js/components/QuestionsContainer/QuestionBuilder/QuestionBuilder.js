import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import context from '../../../context';
import MyCKEditor from '../../UI/MyCKEditor/MyCKEditor';
import InputTag from '../../UI/InputTag/InputTag';
import axios from 'axios';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import styles from './QuestionBuilder.scss';
import { setupModal } from '../../../utility';
import Select from '@bit/mui-org.material-ui.select';
import MenuItem from '@bit/mui-org.material-ui.menu-item';

const QuestionBuilder = (props) => {
  const { question } = props;

  const setIsLoading = useContext(context).changeFixedSpinnerState;
  const [error, setError] = useState();

  const [content, setContent] = useState(question ? question.content : null);

  const [alternativeA, setAlternativeA] = useState(
    question ? question.alternativeA : null
  );
  const [alternativeB, setAlternativeB] = useState(
    question ? question.alternativeB : null
  );
  const [alternativeC, setAlternativeC] = useState(
    question ? question.alternativeC : null
  );
  const [alternativeD, setAlternativeD] = useState(
    question ? question.alternativeD : null
  );
  const [alternativeE, setAlternativeE] = useState(
    question ? question.alternativeE : null
  );
  const [correctAlternative, setCorrectAlternative] = useState(
    question ? question.correctAlternative : 'a'
  );
  const [subject, setSubject] = useState(question ? question.subject.id : 1);

  const [availableSubjects, setAvailableSubjects] = useState([]);

  const [tags, setTags] = useState(
    question ? question.tags.split(',').map((tag) => tag.trim()) : []
  );

  const [modalInstance, setModalInstance] = useState();

  useEffect(() => {
    setIsLoading(true);

    axios
      .get('/subjects')
      .then((response) => {
        setAvailableSubjects(response.data.data);
        const modal = document.querySelector('#modal');
        // eslint-disable-next-line
        const instance = M.Modal.init(modal, {});
        setModalInstance(instance);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [axios]);

  const createQuestionHandler = () => {
    const auxDiv = document.createElement('div');

    let errorFounded = false;
    let errorMessage = null;

    auxDiv.innerHTML = content;

    if (!content || !auxDiv.innerText.trim()) {
      errorFounded = true;
      errorMessage = "O campo 'Conteúdo' precisa ser preenchido";
    }

    auxDiv.innerHTML = alternativeA;

    if (!errorFounded && (!alternativeA || !auxDiv.innerText.trim())) {
      errorFounded = true;
      errorMessage = "O campo 'Alternativa A' precisa ser preenchido";
    }

    auxDiv.innerHTML = alternativeB;

    if (!errorFounded && (!alternativeB || !auxDiv.innerText.trim())) {
      errorFounded = true;
      errorMessage = "O campo 'Alternativa B' precisa ser preenchido";
    }

    auxDiv.innerHTML = alternativeC;

    if (!errorFounded && (!alternativeC || !auxDiv.innerText.trim())) {
      errorFounded = true;
      errorMessage = "O campo 'Alternativa C' precisa ser preenchido";
    }

    auxDiv.innerHTML = alternativeD;

    if (!errorFounded && (!alternativeD || !auxDiv.innerText.trim())) {
      errorFounded = true;
      errorMessage = "O campo 'Alternativa D' precisa ser preenchido";
    }

    if (!errorFounded && !correctAlternative) {
      errorFounded = true;
      errorMessage = 'Uma alternativa correta precisa ser selecionada';
    }

    if (!errorFounded && !subject) {
      errorFounded = true;
      errorMessage = 'Uma matéria precisa ser selecionada';
    }

    auxDiv.innerHTML = alternativeE;

    if (
      !errorFounded &&
      (!alternativeE || !auxDiv.innerText.trim()) &&
      correctAlternative === 'E'
    ) {
      errorFounded = true;
      errorMessage =
        "A alternativa correta não pode ser 'E' pois esta não está preenchida";
    }

    if (errorFounded) {
      setupModal('Erro no formulário', 'red-text', errorMessage);
      modalInstance.open();
    } else {
      const data = {
        content: content,
        alternativeA: alternativeA,
        alternativeB: alternativeB,
        alternativeC: alternativeC,
        alternativeD: alternativeD,
        alternativeE: alternativeE,
        correctAlternative: correctAlternative,
        subject: subject,
        tags: tags,
      };

      setIsLoading(true);

      let request = null;

      if (question) {
        request = axios.put(`/questions/${question.id}`, data);
      } else {
        request = axios.post('/questions', data);
      }

      request
        .then((response) => {
          if (response.status === 200) {
            const operation = question ? 'atualizada' : 'criada';

            setupModal(
              `Questão ${operation} com Sucesso!`,
              'green-text',
              `Sua questão foi ${operation} e já está disponível na sessão 'Minhas Questões'`
            );
            modalInstance.open();
          }
        })
        .catch((error) => {
          setError(error);
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const clearFormHandler = () => {
    setContent('');
    setAlternativeA('');
    setAlternativeB('');
    setAlternativeC('');
    setAlternativeD('');
    setAlternativeE('');
    setCorrectAlternative('a');
    setSubject(1);
    setTags([]);
  };

  let uiContent = null;

  if (error) {
    uiContent = <ErrorMessage message={error.message} />;
  } else {
    uiContent = (
      <div>
        <div className="content">
          <p className={styles.Label}>Conteúdo</p>
          <MyCKEditor content={content} setData={setContent} />
        </div>
        <div className="alternative">
          <p className={styles.Label}>Alternativa A</p>
          <MyCKEditor content={alternativeA} setData={setAlternativeA} />
        </div>
        <div className="alternative">
          <p className={styles.Label}>Alternativa B</p>
          <MyCKEditor content={alternativeB} setData={setAlternativeB} />
        </div>
        <div className="alternative">
          <p className={styles.Label}>Alternativa C</p>
          <MyCKEditor content={alternativeC} setData={setAlternativeC} />
        </div>
        <div className="alternative">
          <p className={styles.Label}>Alternativa D</p>
          <MyCKEditor content={alternativeD} setData={setAlternativeD} />
        </div>
        <div className="alternative">
          <p className={styles.Label}>Alternativa E (Opcional)</p>
          <MyCKEditor content={alternativeE} setData={setAlternativeE} />
        </div>

        <div>
          <p className={styles.Label}>Alternativa Correta</p>

          <Select
            className={styles.Select}
            value={correctAlternative}
            onChange={(event) => setCorrectAlternative(event.target.value)}
          >
            <MenuItem value="a">A</MenuItem>
            <MenuItem value="b">B</MenuItem>
            <MenuItem value="c">C</MenuItem>
            <MenuItem value="d">D</MenuItem>
            <MenuItem value="e">E</MenuItem>
          </Select>
        </div>
        <div>
          <p className={styles.Label}>Matéria</p>

          <Select
            className={styles.Select}
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            {availableSubjects.map((subject) => (
              <MenuItem key={subject.id} value={subject.id}>
                {subject.name}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <p className="label">Tags</p>
          <InputTag tags={tags} setTags={setTags} />
        </div>
        <button
          className={`btn ${styles.CreateButton} z-depth-0`}
          onClick={createQuestionHandler}
        >
          {question ? 'Salvar' : 'Criar'}
        </button>
        <div
          className={`btn ${styles.ClearButton} z-depth-0`}
          onClick={clearFormHandler}
        >
          Limpar
        </div>
      </div>
    );
  }

  return <div className={styles.QuestionBuilder}>{uiContent}</div>;
};

QuestionBuilder.propTypes = {
  question: PropTypes.shape({
    alternativeA: PropTypes.any,
    alternativeB: PropTypes.any,
    alternativeC: PropTypes.any,
    alternativeD: PropTypes.any,
    alternativeE: PropTypes.any,
    content: PropTypes.any,
    correctAlternative: PropTypes.any,
    id: PropTypes.any,
    subject: PropTypes.shape({
      id: PropTypes.any,
    }),
    tags: PropTypes.string,
  }),
};

export default QuestionBuilder;
