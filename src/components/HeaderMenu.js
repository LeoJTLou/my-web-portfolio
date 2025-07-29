import LeoLouLogo from '../assets/Leo-Lou-Logo-Design.gif';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container position-relative">
                <a className="navbar-brand" href={isHomePage ? '#' : '/my-web-portfolio'}>
                    <img src={LeoLouLogo} alt="Leo Lou Logo" height="40" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0 nav-center-lg" style={{ display: isHomePage ? 'flex' : 'none' }}>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
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