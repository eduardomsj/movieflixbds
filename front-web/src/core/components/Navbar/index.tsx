import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    children?: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
    return (
        <nav className="main-nav">
            <Link to="/" >
                <h4 className="main-nav-text">MovieFlix</h4>
            </Link>
            {children}
        </nav>
    )
}

export default Navbar;