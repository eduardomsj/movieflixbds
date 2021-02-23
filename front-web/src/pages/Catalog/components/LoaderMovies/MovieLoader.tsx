import React from "react"
import ContentLoader from "react-content-loader"
import { generateList } from "../../../../core/utils/list";

const MovieLoader = () => {
    const loaderItems = generateList(4);

    return (
        <>
            {loaderItems.map(item => (
               <ContentLoader 
                    key={item}
                    speed={1}
                    width={270}
                    height={375}
                    viewBox="0 0 270 375"
                    backgroundColor="#ECEBEB"
                    foregroundColor="#6C6C6C"               
                >
                    <rect x="0" y="0" rx="10" ry="10" width="270" height="375" />
                </ContentLoader>
            ))}
        </>
    )
}

export default MovieLoader;