import React from 'react';
import ButtonLogout from '../../core/components/ButtonLogout';
import Navbar from '../../core/components/Navbar';
import './styles.scss';

const Catalog = () => {
    return (
        <>
            <Navbar>
                <ButtonLogout />
            </Navbar>
            <div className="catalog-container">
                <h1>Catálogo de Filmes</h1>
            </div>
        </>
    )
}

export default Catalog;