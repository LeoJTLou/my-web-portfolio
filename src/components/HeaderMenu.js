import LeoLouLogo from '../assets/Leo-Lou-Logo-Design.gif';
import { useLocation, NavLink } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container position-relative">
                <NavLink className="navbar-brand" to={isHomePage ? '#' : '/'}>
                    <img src={LeoLouLogo} alt="Leo Lou Logo" height="40" className="d-inline-block align-text-top" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0 nav-center-lg" style={{ display: isHomePage ? 'flex' : 'none' }}>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="#about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#contact">Contact</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text ms-auto">
                        <button className="btn btn-outline-primary px-3">Hire Me</button>
                    </span>
                </div>
            </div>
        </nav>
    );
}