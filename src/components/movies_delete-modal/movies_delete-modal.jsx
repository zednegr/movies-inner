import { useState, useEffect, useRef } from "react"
// import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';

import "./movies_delete-modal.scss"
import axios from "axios"

function MoviesDelModal({ openDelModal, setOpenDelModal, modalDelData }) {

    const [getData, setGetData] = useState()
    const [loading, setLoading] = useState(false)

    // const toast = useRef(null);
    // const toastBC = useRef(null);


    // const clear = (submit) => {
    //     toastBC.current.clear();
    //     submit && show();
    // };

    // const show = () => {
    //     toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    // };

    // const confirm = () => {
    //     toastBC.current.show({
    //         severity: 'info',
    //         sticky: true,
    //         className: 'border-none',
    //         content: (
    //             <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
    //                 <div className="text-center">
    //                     <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
    //                     <div className="font-bold text-xl my-3">Are you sure?</div>
    //                 </div>
    //                 <div className="flex gap-2">
    //                     <Button onClick={(e) => {onDelete(modalDelData?.id), clear(false)}} type="button" label="Confirm" className="p-button-success w-6rem" />
    //                     <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem" />
    //                 </div>
    //             </div>
    //         )
    //     });
    // };


    useEffect(() => {
        axios('https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies')
            .then((res) => setGetData(res.data))
            .finally(() => {
                setLoading(false)
            })
    }, [])


    // function onDelete(id) {

    //     axios.delete(`https://64ca9c72700d50e3c7051e26.mockapi.io/movie/movies/${id}`)

    //         .then((data) => {
    //             setGetData(data)
    //             setLoading(false)
    //         })
    // }


    return (
        <section className="modal-section">
            {/* <Toast ref={toast} />
            <Toast ref={toastBC} position="bottom-center" /> */}
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

                        <h2 className="modal-delete-h2">Aniq O'chirilsinmi ?</h2>

                        <div className="movies_delete-modal-btns">
                            <button className="modal-delete-CloseBtn">Close</button>
                            <button className="modal-delete-Btn" onClick={() => onDelete(modalDelData.id)}>I'm sure 100%</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default MoviesDelModal