import { useState, useEffect } from "react"

import "./movies_edit-modal.scss"
import axios from "axios"

function MoviesModal({ openModal, setOpenModal }) {

    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        axios('https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies')
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className="modal-section">
            <div className="container">
                <div className={`modal_edit ${openModal ? 'modal_edit-open' : ''}`} onClick={(e) => {
                    if (e.target.matches('.modal_edit')) {
                        setOpenModal(false)
                    }
                }}>
                    <div className="modal_inner">
                        <input type="text" />
                        <input type="text" />
                        <button>done</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default MoviesModal