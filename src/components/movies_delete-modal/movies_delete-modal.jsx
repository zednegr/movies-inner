import { useState, useEffect } from "react"

import "./movies_delete-modal.scss"
import axios from "axios"

function MoviesDelModal({ openDelModal, setOpenDelModal, modalDelData }) {

    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios('https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies')
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [])


    function onDelete(id) {

        axios.delete(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies/${id}`)

            .then((data) => {
                setGetData(data)
                setLoading(false)
            })
    }


    return (
        <section className="modal-section">
            <div className="container">
                <div className={`modal_edit ${openDelModal ? 'modal_edit-open' : ''}`} onClick={(e) => {
                    if (e.target.matches('.modal_edit')) {
                        setOpenDelModal(false)
                    }

                    if (e.target.matches('.modal-delete-CloseBtn')) {
                        setOpenDelModal(false)
                    }
                }}>
                    <div className="modal_inner">

                        <h2>Aniq O'chirilsinmi ?</h2>

                        <button className="modal-delete-CloseBtn">Close</button>
                        <button onClick={() => onDelete(modalDelData.id)}>I'm sure 100%</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default MoviesDelModal