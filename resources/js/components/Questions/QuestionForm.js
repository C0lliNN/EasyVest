import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import MyCKEditor from "../UI/MyCKEditor";
import InputTag from "../UI/InputTag";
import axios from "axios";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";

const QuestionForm = props => {
    const { question } = props;

    const [isLoading, setIsLoading] = useState();
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
        question ? question.correctAlternative : ""
    );
    const [subject, setSubject] = useState(question ? question.subject.id : "");

    const [availableSubjects, setAvailableSubjects] = useState([]);

    const [tags, setTags] = useState(
        question ? question.tags.split(",").map(tag => tag.trim()) : []
    );

    const [modalInstance, setModalInstance] = useState();

    useEffect(() => {
        setIsLoading(true);

        axios
            .get("/subjects")
            .then(response => {
                setAvailableSubjects(response.data.data);
                const modal = document.querySelector("#modal");
                // eslint-disable-next-line
                const instance = M.Modal.init(modal, {});
                setModalInstance(instance);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [axios]);

    const setupModal = (headerText, headerClass, contentText) => {
        const header = document.querySelector("#modal h4");
        header.innerHTML = headerText;
        header.className = headerClass;

        const modalContent = document.querySelector("#modal p");
        modalContent.innerHTML = contentText;
    };

    const createQuestionHandler = () => {
        const auxDiv = document.createElement("div");

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
            errorMessage = "Uma alternativa correta precisa ser selecionada";
        }

        if (!errorFounded && !subject) {
            errorFounded = true;
            errorMessage = "Uma matéria precisa ser selecionada";
        }

        auxDiv.innerHTML = alternativeE;

        if (
            !errorFounded &&
            (!alternativeE || !auxDiv.innerText.trim()) &&
            correctAlternative === "E"
        ) {
            errorFounded = true;
            errorMessage =
                "A alternativa correta não pode ser 'E' pois esta não está preenchida";
        }

        if (errorFounded) {
            setupModal("Erro no formulário", "red-text", errorMessage);
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
                tags: tags
            };

            setIsLoading(true);

            let request = null;

            if (question) {
                request = axios.put(`/questions/${question.id}`, data);
            } else {
                request = axios.post("/questions", data);
            }

            request
                .then(response => {
                    if (response.status === 200) {
                        const operation = question ? "atualizada" : "criada";

                        setupModal(
                            `Questão ${operation} com Sucesso!`,
                            "green-text",
                            `Sua questão foi ${operation} e já está disponível na sessão 'Minhas Questões'`
                        );
                        modalInstance.open();
                    }
                })
                .catch(error => {
                    setError(error);
                    console.error(error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    const clearFormHandler = () => {
        setContent("");
        setAlternativeA("");
        setAlternativeB("");
        setAlternativeC("");
        setAlternativeD("");
        setAlternativeE("");
        setCorrectAlternative("");
        setSubject("");
        setTags([]);
    };

    let uiContent = null;

    if (isLoading) {
        uiContent = <Spinner />;
    } else if (error) {
        uiContent = <ErrorMessage message={error.message} />;
    } else {
        uiContent = (
            <div>
                <div className="content">
                    <p className="label">Conteúdo</p>
                    <MyCKEditor content={content} setData={setContent} />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa A</p>
                    <MyCKEditor
                        content={alternativeA}
                        setData={setAlternativeA}
                    />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa B</p>
                    <MyCKEditor
                        content={alternativeB}
                        setData={setAlternativeB}
                    />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa C</p>
                    <MyCKEditor
                        content={alternativeC}
                        setData={setAlternativeC}
                    />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa D</p>
                    <MyCKEditor
                        content={alternativeD}
                        setData={setAlternativeD}
                    />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa E (Opcional)</p>
                    <MyCKEditor
                        content={alternativeE}
                        setData={setAlternativeE}
                    />
                </div>

                <div>
                    <p className="label">Alternativa Correta</p>
                    <select
                        className="browser-default"
                        onChange={event =>
                            setCorrectAlternative(event.target.value)
                        }
                        value={correctAlternative}
                    >
                        <option disabled selected value="">
                            Selecione uma Alternativa
                        </option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                        <option value="d">D</option>
                        <option value="e">E</option>
                    </select>
                </div>
                <div>
                    <p className="label">Matéria</p>

                    <select
                        onChange={event => setSubject(event.target.value)}
                        className="browser-default"
                        value={subject}
                    >
                        <option disabled selected value="">
                            Selecione uma Matéria
                        </option>
                        {availableSubjects.map(alternative => (
                            <option value={alternative.id} key={alternative.id}>
                                {alternative.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <p className="label">Tags</p>
                    <InputTag tags={tags} setTags={setTags} />
                </div>
                <button className="btn green" onClick={createQuestionHandler}>
                    {question ? "Salvar" : "Criar"}
                </button>
                <div className="btn orange" onClick={clearFormHandler}>
                    Limpar
                </div>
            </div>
        );
    }

    return <div>{uiContent}</div>;
};

QuestionForm.propTypes = {
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
            id: PropTypes.any
        }),
        tags: PropTypes.shape({
            split: PropTypes.func
        })
    })
};

export default QuestionForm;
