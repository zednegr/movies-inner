import { useState, useEffect } from "react"

import "./movies_edit-modal.scss"
import axios from "axios"

function MoviesModal({ openModal, setOpenModal, modalItem }) {

    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState()
    const [year, setYear] = useState()
    const data = {name: 'name', year: 'year'}

    useEffect(() => {
        axios('https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies')
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setName(modalItem?.name)
        setYear(modalItem?.year)

    }, [modalItem])

    function onUpdate(e, id) {

        // e.preventDefault()

        axios.put(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies/${id}`, {
            
            body: JSON.stringify(data)
        })
    }

    return (
        <section className="modal-section">
            <div className="container">
                <div className={`modal_edit ${openModal ? 'modal_edit-open' : ''}`} onClick={(e) => {
                    if (e.target.matches('.modal_edit')) {
                        setOpenModal(false)
                    }
                }}>
                    <div className="modal_inner">
                        <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
                        <input type="text" value={year} onChange={(evt) => setYear(evt.target.value)} />
                        <button onClick={() => onUpdate(modalItem.id)}>done</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default MoviesModal