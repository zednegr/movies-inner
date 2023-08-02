import './navbar.scss'

import MoviesLogo from "../../assets/svg/movies-logo.svg"

function Navbar() {

    return (

        <section className='navbar-section'>
            <div className="container">
                <nav className='navbar'>

                    <div className="brand">
                        <img src={MoviesLogo} alt="Logo" />
                        <h2 className='brand-h2'>Filmagnet</h2>
                    </div>

                    <ul className='nav_list'>
                        <li><a href="">Home</a></li>
                        <span>|</span>
                        <li><a href="">Home</a></li>
                        <span>|</span>
                        <li><a href="">Home</a></li>
                        <span>|</span>
                        <li><a href="">Home</a></li>
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