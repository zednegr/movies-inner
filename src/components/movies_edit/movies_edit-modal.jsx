import "./movies_edit-modal.scss"

function MoviesModal({ openModal, setOpenModal }) {

    console.log(openModal);

    return (
        <section className="modal-section">
            <div className="container">
                <div className={`modal_edit ${openModal ? 'modal_edit-open' : ''}`} onClick={(e) => {
                    if(e.target.matches('.modal_edit')) {
                        setOpenModal(false)
                    }
                }}>
                    <div className="modal_inner">
                        <h1>Hi modal</h1>
                    </div>
                </div>      
            </div>

        </section>
    )
}

export default MoviesModal