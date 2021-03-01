import {Link} from 'react-router-dom'
import './Header.css'

export default function Header(props) {

    return(
        <header>
            <nav>
                <div className="dropdown">
                    <button className="dropbtn">Menu</button>
                    <div className="dropdown-content">
                        <Link to="/" >Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/works'>Works</Link>
                        <Link to='/commision'>Commision</Link>
                        <button onClick={props.props.handleSetContact} className="contactBtn">Contact</button>
                    </div>
                </div>
            </nav>
            <h1>Susan Gartee</h1>
        </header>
    )
}