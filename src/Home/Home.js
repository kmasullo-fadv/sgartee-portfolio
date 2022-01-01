import './Home.css'
import {images} from '../imgStore.js'

export default function Home() {

    return(
        <>
            <div id="home">
                <img src={images[6].pic} alt='one' id='welcomeImg'/>
                <h1>Susan Gartee</h1>
            </div>
            <div id='homeImgs'>
                {images.map((im, i) => (
                    <div className={`imgContainer ${im.orientation}`} key={im.title + i}>
                        <img src={im.pic} alt={im.title} className='img' height={im.height} width={im.width} />
                        <div className="imgDesc">
                            <h3 className="imgTitle">{im.title}</h3>
                            <p className="imgDescription">{im.medium}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}