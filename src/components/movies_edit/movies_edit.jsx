import { useState, useEffect, useRef } from "react"
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import './movies_edit.scss'
import Loading from "../../components/loading/loading"
import MoviesModal from "../movies_edit-modal/movies_edit-modal"
import MoviesDelModal from "../movies_delete-modal/movies_delete-modal"
import axios from "axios"

function MoviesEdit() {

    const [data, setData] = useState()
    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [openDelModal, setOpenDelModal] = useState(false)
    const [modalData, setModalData] = useState()
    const [modalDelData, setModalDelData] = useState()
    const [refresh, setRefresh] = useState()

    const toast = useRef(null);
    const toastBC = useRef(null);


    const clear = (submit) => {
        toastBC.current.clear();
        submit && show();
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const confirm = (item) => {
        toastBC.current.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <div className="font-bold text-xl my-3">Delete!</div>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={(e) => { onDelete(item?.id), clear(false) }} type="button" label="I'm sure 100%" className="p-button-success w-6rem" />
                        <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem" />
                    </div>
                </div>
            )
        });
    };

    useEffect(() => {
        axios('http://esystem.uz/room/')
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [refresh])

    if (loading) {
        return <Loading />
    }


    function onDelete(id) {

        setRefresh(true)
        axios.delete(`https://64e8e93299cf45b15fe0502c.mockapi.io/movie/movie/${id}`)
            .then((data) => {
                setRefresh(false)
            })
    }

    // function opensdaModal(item) {
    //     setOpenDelModal(true)
    //     setModalDelData(item)
    // }


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
                                    <Toast ref={toast} />
                                    <Toast ref={toastBC} position="center" />
                                    <div className="movies_edit-img">
                                        <img className="movies_edit-img" src={item?.img} alt="Movie" />
                                    </div>

                                    <div className="movies_edit-desc">
                                        <div className="movie-name"><h4 className='movie-name-h4'>{item?.name.length > 10 ? item?.name.slice(0, 14) + "..." : item?.name}</h4></div>
                                        <div className="movie-year"><h5 className='movie-year-h5'>{item?.year}</h5></div>
                                    </div>

                                    <div className="movies_edit-btns">
                                        <button className="movies_del-btn" onClick={() => confirm(item)}>Delete</button>
                                        <button className="movies_edit-btn" onClick={() => onEdit(item)}>Edit</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <MoviesModal openModal={openModal} setOpenModal={setOpenModal} modalItem={modalData} />
                    {/* <MoviesDelModal openDelModal={openDelModal} setOpenDelModal={setOpenDelModal} modalDelData={modalDelData} /> */}
                </div>
            </div>

        </section>
    )
}

export default MoviesEdit