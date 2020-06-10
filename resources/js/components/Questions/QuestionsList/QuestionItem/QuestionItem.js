import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const QuestionItem = (props) => {
    const { question, text } = props;

    let relations = [];

    if (question.pivot) {
        relations.push(question.pivot.relation);
    }

    if (question.relations) {
        relations.push(
            ...question.relations.map((user) => user.pivot.relation)
        );
    }

    return (
        <li key={question.id} className="collection-item">
            <Link to={`/questions/${question.id}`} className="truncate">
                {text}
            </Link>
            <p className="subject">
                <i className="material-icons">book</i>
                <span>{question.subject.name}</span>
            </p>
            <div>
                <p className="tags">
                    <React.Fragment>
                        <i className="material-icons">label_outline</i>
                        <span>
                            {question.tags && question.tags.length
                                ? question.tags
                                : "Sem tags"}
                        </span>
                    </React.Fragment>
                </p>

                <p className="crud-icons">
                    {relations.includes("owner") && (
                        <React.Fragment>
                            <button
                                className="tooltipped"
                                data-position="bottom"
                                data-tooltip="Editar"
                                onClick={() =>
                                    props.editQuestionHandler(question.id)
                                }
                            >
                                <i className="material-icons blue-text">edit</i>
                            </button>
                            <button
                                className="tooltipped"
                                data-position="bottom"
                                data-tooltip="Excluir"
                                onClick={() =>
                                    props.deleteQuestionHandler(question.id)
                                }
                            >
                                <i className="material-icons red-text">
                                    delete
                                </i>
                            </button>
                        </React.Fragment>
                    )}
                    {relations.includes("bookmark") ? (
                        <button
                            className="tooltipped"
                            data-position="bottom"
                            data-tooltip="Remover dos Favoritos"
                            onClick={() =>
                                props.unbookmarkQuestionHandler(question.id)
                            }
                        >
                            <i className="material-icons yellow-text text-darken-1">
                                star
                            </i>
                        </button>
                    ) : (
                        <button
                            className="tooltipped"
                            data-position="bottom"
                            data-tooltip="Adicionar aos Favoritos"
                            onClick={() =>
                                props.bookmarkQuestionHandler(question.id)
                            }
                        >
                            <i className="material-icons yellow-text text-darken-1">
                                stars
                            </i>
                        </button>
                    )}
                </p>
            </div>
        </li>
    );
};

QuestionItem.propTypes = {
    bookmarkQuestionHandler: PropTypes.func,
    deleteQuestionHandler: PropTypes.func,
    editQuestionHandler: PropTypes.func,
    question: PropTypes.shape({
        id: PropTypes.any,
        pivot: PropTypes.shape({
            relation: PropTypes.any,
        }),
        relations: PropTypes.shape({
            map: PropTypes.func,
        }),
        subject: PropTypes.shape({
            name: PropTypes.any,
        }),
        tags: PropTypes.shape({
            length: PropTypes.any,
        }),
    }),
    text: PropTypes.any,
    unbookmarkQuestionHandler: PropTypes.func,
};

export default QuestionItem;
