import './Home.css'
import {images} from '../imgStore.js'

export default function Home() {

    return(
        <>
        <div id="home">
            <img src={images[6].pic} alt='one' id='welcomeImg'/>
            <p id="artistStatement">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget blandit ex, id scelerisque eros. Duis tincidunt iaculis lectus, et semper tortor scelerisque dignissim. Donec eu ante et tortor dignissim faucibus. Nulla non quam eget ex commodo lacinia. Curabitur ultrices turpis non nibh congue, ut iaculis magna volutpat. Aenean finibus porttitor rhoncus. Phasellus eget quam maximus, dapibus metus et, efficitur mauris. Suspendisse sem ligula, ullamcorper eu molestie eleifend, venenatis aliquet sapien. Maecenas leo mi, elementum quis risus vitae, rhoncus congue libero. Nulla enim velit, dapibus a tempor a, commodo ac sapien. Pellentesque sed lacus nibh. Nullam hendrerit tellus nec quam tristique, quis fermentum mi egestas. Maecenas iaculis risus at turpis ornare, non posuere nulla ullamcorper. Donec posuere et ante id tempor. Pellentesque nisi nunc, dictum gravida molestie id, ultrices sit amet leo. Fusce commodo tristique odio, feugiat ultricies urna malesuada et.
            </p>
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