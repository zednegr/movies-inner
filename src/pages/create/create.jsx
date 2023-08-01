import { useState } from "react"

import "./create.scss"

function Create() {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')
    const [rating, setRating] = useState('')
    const [desc, setDesc] = useState('')
    const [quality, setQuality] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')
    const [url, setUrl] = useState('')
    const [bg, setBg] = useState('')

    const data = { 'name': name, 'img': img, 'time': time, 'rating': rating, 'desc': desc, 'quality': quality, 'genre': genre, 'year': year, 'url': url, 'bg': bg}

    function onSubmit(e) {
        e.preventDefault()

        fetch('https://64b8278821b9aa6eb0799f1f.mockapi.io/movie/films', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(res => console.log(res))
    }
    return (
        <section className="create-section" >
            <div className="container">
                <div className="create-wrapper">
                    <h1>Admin Panel</h1>
                    <form>
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Img" onChange={(e) => setImg(e.target.value)} />
                        <input type="text" placeholder="Time" onChange={(e) => setTime(e.target.value)} />
                        <input type="text" placeholder="Rating" onChange={(e) => setRating(e.target.value)} />
                        <input type="text" placeholder="Desc" onChange={(e) => setDesc(e.target.value)} />
                        <input type="text" placeholder="Quality" onChange={(e) => setQuality(e.target.value)} />
                        <input type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} />
                        <input type="text" placeholder="Year" onChange={(e) => setYear(e.target.value)} />
                        <input type="text" placeholder="Url" onChange={(e) => setUrl(e.target.value)} />
                        <input type="text" placeholder="Background" onChange={(e) => setBg(e.target.value)} />
                        <button onClick={onSubmit}>Submit</button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Create