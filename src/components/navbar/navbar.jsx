import './navbar.scss'

import MoviesLogo from "../../assets/svg/movies-logo.svg"

function Navbar() {

    return (

        <section className='navbar-section'>
            <div className="container">
                <div className="brand">
                    <img src={MoviesLogo} alt="Logo" />
                </div>
                <nav className='navbar'>
                    <ul className='nav_list'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                    </ul>
                </nav>
            </div>

        </section>
    )
}

export default Navbar