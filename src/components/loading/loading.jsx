import './loading.scss'

function Loading() {
    
    return (
        <>
            <section>
                <div className="container">
                    <div className="loading">
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loading