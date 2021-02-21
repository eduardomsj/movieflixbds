import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../utils/auth';
import './styles.scss';

type Props = {
    children?: React.ReactNode;
}

const ButtonLogout = ({ children }: Props) => {

    const history = useHistory();

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
        history.replace('/');
    }

    return (
        <Link to="#" onClick={handleLogout}>
            <div className="btn-logout">
                <h3 className="btn-logout-text">sair</h3>
            </div>
        </Link>
    )
}

export default ButtonLogout;