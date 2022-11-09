import './styles.css'

const Guide = () => {
    return (
        <div className='guide-container'>
           <h2 className='h2-guide'>CONFIRA NOSSO TUTORIAL NO YOUTUBE</h2>
           <div className='video'>
            <iframe src="https://www.youtube.com/embed/aqazAdlFgTY" width='560' height='315' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export {Guide}