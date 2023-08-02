import './hero.scss'

function Hero() {

    return (
        <section className='hero-section'>
            <div className="">
                <div className="container">
                    <div className="hero-wrapper">
                        <div className="hero-about">

                            <div className="hero-brand">
                                <h4 className='hero-brand-h4'>Filmagnet</h4>
                            </div>

                            <div className="hero-title">
                                <h1 className='hero-title-h1'>Filmagnet Unlimited Entertainment, Movies, TVs shows, & More.</h1>
                            </div>

                            <div className="hero-info">
                                <div className="hero-info-dramma">
                                    <h5 className='hero-info-dramma-h5'>Movie</h5>
                                </div>

                                <div className="hero-info-quality">
                                    <h5 className='hero-info-quality-h5'>FHD</h5>
                                </div>

                                <div className="hero-info-type">
                                    <h5 className='hero-info-type-h5'>Action, Drama</h5>
                                </div>

                                <div className="hero-info-calendar">
                                    <h5 className='hero-info-calendar-h5'>2023</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero