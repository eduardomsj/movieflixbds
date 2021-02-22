import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { makePrivateRequest } from '../../../../../../core/utils/request';
import './styles.scss';

type ParamsType = {
    id: string,
}

type FormState = {
    text?: string,
    movieId: number,
}

const CommentCard = ({ id }: ParamsType) => {

    const { register, errors, handleSubmit } = useForm<FormState>();
    const history = useHistory();

    const onSubmit = (data: FormState) => {

        data.movieId = parseInt(id);

        makePrivateRequest({ url: `/reviews`, method: 'POST', data })
            .then(response => {
                toast.info("Obrigado pela sua avaliação!")
                history.go(0);
            })
            .catch(() => {
                toast.error("Houve um erro na validação da avaliação!")
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="comment-container">
                {errors.text && (
                    <div className="comment-alert">
                        Preencha o campo de sua avaliação!
                    </div>
                )}
                <textarea
                    name="text"
                    className="comment-input"
                    placeholder="Deixe sua avaliação aqui"
                    cols={2}
                    rows={10}
                    ref={register({ required: "Campo obrigatório!" })}
                />
                <button className="comment-btn">
                    <h3 className="comment-btn-text">salvar avaliação</h3>
                </button>
            </form>
        </>
    )
}

export default CommentCard;