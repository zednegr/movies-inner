import { NavLink as Link } from "react-router-dom"
import './navbar.scss'
import MoviesLogo from "../../assets/svg/movies-logo.svg"

function Navbar() {

    return (

        <section className='navbar-section'>
            <div className="nav-container">
                <nav className='navbar'>

                    <Link to={'/'}>
                        <div className="brand">
                            <img src={MoviesLogo} alt="Logo" />
                            <h2 className='brand-h2'>Filmagnet</h2>
                        </div>
                    </Link>

                    <ul className='nav_list'>
                        <Link to={'/'}>
                            <p>HOME</p>
                        </Link>
                        <span>|</span>
                        <Link to={''}>
                            <p>ADD API</p>
                        </Link>
                        <span>|</span>
                        <Link to={''}>
                            <p>EDIT API</p>
                        </Link>
                        <span>|</span>
                        <Link>
                            <p>WEB SERIES</p>
                        </Link>
                        <span>|</span>
                        <Link>
                            <p>PRIMIUM</p>
                        </Link>
                    </ul>

                    <div className="nav_right">
                        <a className='nav-btn' href="#">Sign in</a>
                    </div>
                </nav>
            </div>

        </section>
    )
}

export default Navbar