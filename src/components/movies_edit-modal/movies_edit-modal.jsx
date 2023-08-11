import { useState, useEffect } from "react"

import "./movies_edit-modal.scss"
import axios from "axios"

function MoviesModal({ openModal, setOpenModal, modalItem }) {

    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState()
    const [img, setImg] = useState()
    const [time, setTime] = useState()
    const [rating, setRating] = useState()
    const [desc, setDesc] = useState()
    const [quality, setQuality] = useState()
    const [genre, setGenre] = useState()
    const [year, setYear] = useState()
    const [url, setUrl] = useState()
    const [bg, setBg] = useState()

    useEffect(() => {
        axios('https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies')
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setName(modalItem?.name)
        setImg(modalItem?.img)
        setTime(modalItem?.time)
        setRating(modalItem?.rating)
        setDesc(modalItem?.desc)
        setQuality(modalItem?.quality)
        setGenre(modalItem?.genre)
        setYear(modalItem?.year)
        setUrl(modalItem?.url)
        setBg(modalItem?.bg)

    }, [modalItem])

    function onUpdate(id) {

        axios.put(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies/${id}`, {
            name, img, time, rating, desc, quality, genre, year, url, bg
        }).then((res) => console.log(res))
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

                        <h2 className="modal_edit-h2">Filmni Tahrirlash.</h2>
                        <form>
                            <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
                            <input type="text" value={img} onChange={(evt) => setImg(evt.target.value)} />
                            <input type="text" value={time} onChange={(evt) => setTime(evt.target.value)} />
                            <input type="text" value={rating} onChange={(evt) => setRating(evt.target.value)} />
                            <input type="text" value={desc} onChange={(evt) => setDesc(evt.target.value)} />
                            <input type="text" value={quality} onChange={(evt) => setQuality(evt.target.value)} />
                            <input type="text" value={genre} onChange={(evt) => setGenre(evt.target.value)} />
                            <input type="text" value={year} onChange={(evt) => setYear(evt.target.value)} />
                            <input type="text" value={url} onChange={(evt) => setUrl(evt.target.value)} />
                            <input type="text" value={bg} onChange={(evt) => setBg(evt.target.value)} />
                        </form>

                        <button className="modal_edit-btn" onClick={() => onUpdate(modalItem?.id)}>done</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default MoviesModal