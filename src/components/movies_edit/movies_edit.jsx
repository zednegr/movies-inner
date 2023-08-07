import { useState, useEffect } from "react"

import './movies_edit.scss'
import MoviesModal from "./movies_edit-modal"
import axios from "axios"

function MoviesEdit() {

    const [data, setData] = useState()
    const [edit, setEdit] = useState()
    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)

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

    function onEdit(id) {

        axios.put(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies/${id}`, {
        })

            .then((data) => {
                setData(data)
                setLoading(false)
            })

    }
    
    return (
        <section className='movies_edit-section'>
            <div className="container">
                <div className="movies_edit-wrapper">
                    <h1>Hi</h1>

                    {
                        getData?.map(item => {
                            return (
                                <div className="movies_edit-card">
                                    <img src={item?.img} alt="" />
                                    <button onClick={() => onDelete(item.id)}>
                                        Delete
                                    </button>
                                    <button onClick={() => setOpenModal(true)}>Edit</button>
                                </div>
                            )
                        })
                    }

                    <MoviesModal openModal={openModal} setOpenModal={setOpenModal} />
                </div>
            </div>

        </section>
    )
}

export default MoviesEdit