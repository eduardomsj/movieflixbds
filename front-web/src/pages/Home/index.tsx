import React from 'react';
import {ReactComponent as Image} from '../../core/assets/images/home-image.svg';
import Navbar from '../../core/components/Navbar';
import Auth from '../Auth';
import './styles.scss';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <div className= "home-content">
                    <div>
                        <h1 className="home-title">
                            Avalie Filmes
                        </h1>
                        <h3 className="home-subtitle">
                            Faça parte do nosso catálogo de divulgação e <br/>
                            aumente a venda dos seus produtos
                        </h3>
                        <div className="home-image">
                            <Image />
                        </div>
                    </div>
                </div>
            <Auth />
            </div>
        </>
    )
}

export default Home;