import { useState, useEffect } from "react"

import './movies_edit.scss'
import MoviesModal from "../movies_edit-modal/movies_edit-modal"
import axios from "axios"

function MoviesEdit() {

    const [data, setData] = useState()
    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [modalData, setModalData] = useState()

    useEffect(() => {
        axios('https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies')
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    function onDelete(id) {

        axios.delete(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies/${id}`, {
        })

            .then((data) => {
                setData(data)
                setLoading(false)
            })
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
                                        <img className="movies_edit-img" src={item?.img} alt="" />
                                        <h1>{item?.name}</h1>
                                        <h1>{item?.year}</h1>
                                        <button onClick={() => onDelete(item.id)}>
                                            Delete
                                        </button>
                                        <button onClick={() => onEdit(item)}>Edit</button>
                                    </div>
                                )
                            })
                        }

                        <MoviesModal openModal={openModal} setOpenModal={setOpenModal} modalItem={modalData} />
                    </div>
                </div>

            </section>
    )
}

export default MoviesEdit