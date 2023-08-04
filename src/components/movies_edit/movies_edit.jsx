import { useState, useEffect } from "react"

import './movies_edit.scss'

function MoviesEdit() {

    const [data, setData] = useState()
    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies`)
            .then((res) => res.json())
            .then((data) => setGetData(data))
            .finally(() => {
                setLoading(false)
            })
    }, [])


    function onDelete(id) {

        fetch(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies/${id}`, {
            method: 'DELETE'
        })

            .then((res) => res.json())
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
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default MoviesEdit