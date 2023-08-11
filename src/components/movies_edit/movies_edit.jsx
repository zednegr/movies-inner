import { useState, useEffect, useRef } from "react"

import './movies_edit.scss'
import Loading from "../../components/loading/loading"
import MoviesModal from "../movies_edit-modal/movies_edit-modal"
import MoviesDelModal from "../movies_delete-modal/movies_delete-modal"
import axios from "axios"

function MoviesEdit() {

    const [data, setData] = useState()
    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [openDelModal, setOpenDelModal] = useState(false)
    const [modalData, setModalData] = useState()
    const [modalDelData, setModalDelData] = useState()


    useEffect(() => {
        axios('https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies')
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading />
    }


    function opensdaModal(item) {
        setOpenDelModal(true)
        setModalDelData(item)
    }


    function onEdit(item) {

        setOpenModal(true)
        setModalData(item)
    }


    return (
        <section className='movies_edit-section'>
            <div className="container">
                <div className="movies_edit-wrapper">

                    {
                        getData?.map(item => {
                            return (
                                <div className="movies_edit-card" key={item.id}>

                                    <div className="movies_edit-img">
                                        <img className="movies_edit-img" src={item?.img} alt="Movie" />
                                    </div>

                                    <div className="movies_edit-desc">
                                        <div className="movie-name"><h4 className='movie-name-h4'>{item?.name.length > 10 ? item?.name.slice(0, 14) + "..." : item?.name}</h4></div>
                                        <div className="movie-year"><h5 className='movie-year-h5'>{item?.year}</h5></div>
                                    </div>

                                    <div className="movies_edit-btns">
                                        <button className="movies_del-btn" onClick={() => opensdaModal(item)}>Delete</button>
                                        <button className="movies_edit-btn" onClick={() => onEdit(item)}>Edit</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <MoviesModal openModal={openModal} setOpenModal={setOpenModal} modalItem={modalData} />
                    <MoviesDelModal openDelModal={openDelModal} setOpenDelModal={setOpenDelModal} modalDelData={modalDelData} />
                </div>
            </div>

        </section>
    )
}

export default MoviesEdit