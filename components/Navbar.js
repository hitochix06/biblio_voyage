import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Bibliothèque voyage</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">À propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="connexion">Se connecter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;
