import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { Toast } from 'primereact/toast';

import "./create.scss"
import Loading from "../../components/loading/loading"
import axios from "axios";

function Create() {


    // const [name, setName] = useState('')
    // const [img, setImg] = useState('')
    // const [time, setTime] = useState('')
    // const [rating, setRating] = useState('')
    // const [desc, setDesc] = useState('')
    // const [quality, setQuality] = useState('')
    // const [genre, setGenre] = useState('')
    // const [year, setYear] = useState('')
    // const [url, setUrl] = useState('')
    // const [bg, setBg] = useState('')

    const [name, setName] = useState('')

    // Button loading

    const [loading, setLoading] = useState(false)
    const [loadingAnim, setLoadingAnim] = useState(true)
    const [inputValue, setInputValue] = useState('');


    const toast = useRef(null);
    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Oxirgacha to\'ldiring brat!', life: 3000 });
    }
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Malades !', life: 3000 });
    }


    // const data = { 'name': name, 'img': img, 'time': time, 'rating': rating, 'desc': desc, 'quality': quality, 'genre': genre, 'year': year, 'url': url, 'bg': bg }


    // name == '' || img == '' || time == '' || rating == '' || desc == '' || quality == '' || genre == '' || year == '' || url == '' || bg == ''

    function onSubmit(e) {
        e.preventDefault()

        if (name == '') {
            showError()
        } else {
            setLoading(true)

            axios.post('http://esystem.uz/room-create/', {

                // name,
                // img,
                // time,
                // rating,
                // desc,
                // quality,
                // genre,
                // year,
                // url,
                // bg

                name,
            }).then(res => {
                console.log(res);
                setLoading(false)
                // setName('')
                // setImg('')
                // setTime('')
                // setRating('')
                // setDesc('')
                // setQuality('')
                // setGenre('')
                // setYear('')
                // setUrl('')
                // setBg('')

                setName('')

                showSuccess()
            })
        }
    }

    return (
        <section className="create-section" >
            <Toast ref={toast} />
            <div className="container">
                <div className="create-wrapper">

                    <div className="input-wrapper">
                        <form>
                            {/* <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Img" value={img} onChange={(e) => setImg(e.target.value)} />
                            <input type="text" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
                            <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                            <input type="text" placeholder="Desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
                            <input type="text" placeholder="Quality" value={quality} onChange={(e) => setQuality(e.target.value)} />
                            <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
                            <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
                            <input type="text" placeholder="Url" value={url} onChange={(e) => setUrl(e.target.value)} />
                            <input type="text" placeholder="Background" value={bg} onChange={(e) => setBg(e.target.value)} /> */}
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                
                            <button className={`btn-slide ${loading ? 'loading' : ''}`} onClick={onSubmit} disabled={loading}>
                                {loading ? 'Yuborilmoqda' : 'Yuborish'}
                            </button>

                            <div className="back">
                                <NavLink to={'/'}>
                                    <p>Back to Home</p>
                                </NavLink>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Create