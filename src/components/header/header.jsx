import "./header.scss"
import { useState, useEffect } from "react"
import MovieStar from "../../assets/svg/movie-star.svg"
import MovieClock from "../../assets/svg/movie-clock.svg"
import { NavLink } from "react-router-dom"
import Loading from "../loading/loading"


function Header() {

    const [getData, setgetData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies')
            .then((res) => res.json())
            .then((data) => setgetData(data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    return (

        <div className="section">
            <div className="container">
                <div className="movie-about">
                    <div className="about"><h1>Upcoming Movies</h1></div>
                </div>

                <div className="wrapper">

                    {
                        getData?.map((item, index) => {
                            return (
                                <NavLink to={`/movie-inner/${item.id}`}>
                                    <div className="movie-cards-wrapper">
                                        <div className="card-movie">
                                            <div className="card-avatar">
                                                <img src={item.img} alt="Movie" />
                                            </div>
                                            <div className="card-desc">

                                                <div className="movie-name"><h4 className='movie-name-h4'>{item.name.slice(0, 12)}</h4></div>
                                                <div className="movie-year"><h5 className='movie-year-h5'>{item.year}</h5></div>

                                            </div>
                                            <div className="card-data">

                                                <div className="card-data-qualty"><p className='card-data-qualty-p'>{item.quality}</p></div>

                                                <div className="card-min-reyting">

                                                    <div className="card-min"><img className='MovieClock' src={MovieClock} width={'13px'} /><p className='card-min-p'>130 min</p></div>
                                                    <div className="card-reyting"><img className='MovieStar' src={MovieStar} width={'12px'} /><p className='card-reyting-p'>7.0</p></div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default Header