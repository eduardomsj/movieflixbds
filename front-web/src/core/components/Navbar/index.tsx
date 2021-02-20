import React from 'react';
import './styles.scss';

const Navbar = () => {
    return (
        <nav className="row bg-primary main-nav">
            <div className="col">
                <a href="/" className="main-nav-text">
                    <h4>Movie Flix</h4>
                </a>
            </div>
            <div className="col-auto justify-content-end">
                
            </div>
        </nav>
    )
}

export default Navbar;
