import {Link} from 'react-router-dom'
import './Footer.css';

export default function Footer() {
    return(
        <div id='footer'>
            <div id="footerNav">
                <Link to="/" >Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/works'>Works</Link>
                <Link to='/commision'>Commision</Link>
                <button >Contact</button>
            </div>
        </div>
    )
}