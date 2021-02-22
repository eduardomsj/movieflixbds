import React from "react";
import ContentLoader from 'react-content-loader'
import './styles.scss';

const DetailMovieLoader = () => {
    return (
        <div className="loader-details">
            <ContentLoader
                speed={1}
                width={1170}
                height={375}
                viewBox="0 0 1170 375"
                backgroundColor="#ECEBEB"
                foregroundColor="#6C6C6C"
            >
            <rect x="0" y="0" rx="10" ry="10" width="1170" height="375" />
            </ContentLoader>
        </div>

    )
}

export default DetailMovieLoader;