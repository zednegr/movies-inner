import { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"
import MoviesImg from "../../assets/img/movie.png"
import MoviesShare from "../../assets/svg/movies-inner-share.svg"
import MoviesStar from "../../assets/svg/movies-inner-star.svg"
import MoviesPlay from "../../assets/svg/movies-inner-play.svg"
import MovieClock from "../../assets/svg/movie-clock.svg"
import MovieCalendar from "../../assets/svg/movie-calendar.svg"

function Movie() {

    const [getData, setgetData] = useState()
    const [loading, setLoading] = useState(true)

    const { movieId } = useParams()

    console.log(movieId);

    useEffect(() => {
        fetch(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies`)
            .then((res) => res.json())
            .then((data) => setgetData(data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <h1>loading</h1>
    }

    return (
        <div className="container">
            {
                getData?.map(item => {
                    return (
                        <NavLink to={`/movie-inner/${item.id}`}>
                            <div className="movies_inner-wrapper">
                                <div className="movies_inner-left">
                                    <img className="movie_inner-left-img" src={item?.img} alt="Movie" />
                                </div>

                                <div className="movies_inner-right">
                                    <div className="movies_inner-about">
                                        <h4 className="movies_inner-about-h4">New Episodes</h4>
                                    </div>
                                    <div className="movies_inner-name">
                                        <h3 className="movies_inner-name-h3">{item?.name.length > 25 ? item?.name.slice(0, 20) + '...' : item?.name}</h3>
                                    </div>

                                    <div className="movies_inner-info">
                                        <div className="movies_inner-dramma">
                                            <h5 className="movies_inner-dramma-h5">{item?.genre}</h5>
                                        </div>
                                        <div className="movies_inner-quality">
                                            <h5 className="movies_inner-quality-h5">{item?.quality}</h5>
                                        </div>
                                        <div className="movies_inner-type">
                                            <h5 className="movies_inner-type-h5">Action, Drama, Adventure, Science fiction</h5>
                                        </div>
                                        <div className="movies_inner-min">
                                            <img className="movies_inner-min-icon" src={MovieClock} />
                                            <h5 className="movies_inner-min-h5">{item?.time}</h5>
                                        </div>
                                        <div className="movies_inner-year">
                                            <img className="movies_inner-year-icon" src={MovieCalendar} />
                                            <h5 className="movies_inner-year-h5">{item?.year}</h5>
                                        </div>
                                    </div>

                                    <div className="movies_inner-play-wrapper">
                                        <div className="movies_inner-share">
                                            <img className="movies_inner-share-img" src={MoviesShare} alt="share" />
                                            <h5 className="movies_inner-share-h5">Share</h5>
                                        </div>

                                        <div className="movies_inner-rate">
                                            <h5 className="movies_inner-rate-h5">Rate The Show</h5>

                                            <div className="movies_inner-rate-wrapper">
                                                <img className="movies_inner-rate-star" src={MoviesStar} alt="Star" />
                                                <h4 className="movies_inner-rate-h4">{item?.rating}</h4>
                                            </div>

                                        </div>

                                        <div className="movies_inner-play">
                                            <img className="movies_inner-play-img" src={MoviesPlay} alt="Play" />
                                            <a className="movies_inner-play-btn" href="#">Play Now</a>
                                        </div>
                                    </div>

                                    <div className="movies_inner-desc">
                                        <p className="movies_inner-desc-p">{item?.desc.length > 555 ? item?.desc.slice(0, 555) + '...' : item?.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default Movie