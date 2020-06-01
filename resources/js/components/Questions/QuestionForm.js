import React, { useState, useRef, useEffect } from "react";
import MyCKEditor from "../UI/MyCKEditor";
import InputTag from "../UI/InputTag";
import axios from "axios";
import Spinner from "../UI/Spinner";
import ErrorMessage from "../UI/ErrorMessage";

const QuestionForm = () => {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const [content, setContent] = useState();
    const [alternativeA, setAlternativeA] = useState();
    const [alternativeB, setAlternativeB] = useState();
    const [alternativeC, setAlternativeC] = useState();
    const [alternativeD, setAlternativeD] = useState();
    const [alternativeE, setAlternativeE] = useState();

    const correctAlternativeRef = useRef();
    const selectedSubjectRef = useRef();

    const [availableSubjects, setAvailableSubjects] = useState([]);

    const [tags, setTags] = useState([]);

    const [modalInstance, setModalInstance] = useState();

    useEffect(() => {
        setIsLoading(true);
        axios
            .get("/subjects")
            .then(response => {
                setAvailableSubjects(response.data.data);
                const modal = document.querySelector("#modal");
                const instance = M.Modal.init(modal, {});
                setModalInstance(instance);
            })
            .catch(error => {
                console.error(error);
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

        if (!errorFounded && !correctAlternativeRef.current.value) {
            errorFounded = true;
            errorMessage = "Uma alternativa correta precisa ser selecionada";
        }

        if (!errorFounded && !selectedSubjectRef.current.value) {
            errorFounded = true;
            errorMessage = "Uma matéria precisa ser selecionada";
        }

        auxDiv.innerHTML = alternativeE;

        if (
            !errorFounded &&
            (!alternativeE || !auxDiv.innerText.trim()) &&
            correctAlternativeRef.current.value === "E"
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
                correctAlternative: correctAlternativeRef.current.value,
                subject: selectedSubjectRef.current.value,
                tags: tags
            };

            setIsLoading(true);

            axios
                .post("/questions", data)
                .then(response => {
                    if (response.status === 200) {
                        setupModal(
                            "Questão criada com Sucesso!",
                            "green-text",
                            "Sua questão foi criada e já está disponível na sessão 'Minhas Questões'"
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
                    <MyCKEditor data={content} setData={setContent} />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa A</p>
                    <MyCKEditor data={alternativeA} setData={setAlternativeA} />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa B</p>
                    <MyCKEditor data={alternativeB} setData={setAlternativeB} />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa C</p>
                    <MyCKEditor data={alternativeC} setData={setAlternativeC} />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa D</p>
                    <MyCKEditor data={alternativeD} setData={setAlternativeD} />
                </div>
                <div className="alternative">
                    <p className="label">Alternativa E (Opcional)</p>
                    <MyCKEditor data={alternativeE} setData={setAlternativeE} />
                </div>

                <div>
                    <p className="label">Alternativa Correta</p>
                    <select
                        className="browser-default"
                        ref={correctAlternativeRef}
                    >
                        <option disabled selected value="">
                            Selecione uma Alternativa
                        </option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>
                </div>
                <div>
                    <p className="label">Matéria</p>

                    <select
                        ref={selectedSubjectRef}
                        className="browser-default"
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
                    Criar
                </button>
            </div>
        );
    }

    return <div>{uiContent}</div>;
};

export default QuestionForm;
