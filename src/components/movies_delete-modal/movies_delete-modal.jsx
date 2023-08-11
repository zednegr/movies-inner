import { useState, useEffect } from "react"

import "./movies_delete-modal.scss"
import axios from "axios"

function MoviesDelModal({openDelModal, setOpenDelModal}) {

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

        setLoading(true)

        axios.delete(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies/${id}`, {
        })

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
                }}>
                    <div className="modal_inner">
                
                        <button onClick={''}>OK</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default MoviesDelModal