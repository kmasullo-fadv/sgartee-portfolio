import './Works.css'
import {images} from '../imgStore.js'

export default function Works() {

    return(
        <div id='worksImgs'>
            {images.map((im, i) => (
                <div className={`worksContainer ${im.orientation}`} key={im.title + i}>
                    <img src={im.pic} alt={im.title} className='img' height={im.height} width={im.width} />
                    <div className="worksDesc">
                        <h3 className="imgTitle">{im.title}</h3>
                        <p className="imgDescription">{im.medium}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}