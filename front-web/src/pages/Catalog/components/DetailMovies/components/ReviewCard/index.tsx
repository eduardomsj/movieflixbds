import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

type Props = {
    userReview?: string;
    textReview?: string;
}

const ReviewCard = ({userReview, textReview}:Props) => {

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <FontAwesomeIcon icon={faStar} className="review-img" />
                <p className="review-name">{userReview}</p>
            </div>
            <div style={{ display: 'block' }}>
                <div className="review-form">
                <h3 className="review-text">{textReview}</h3>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;