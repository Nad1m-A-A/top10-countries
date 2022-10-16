import MainImage from "../store/images/Pexels.jpg"
import './header.css'

function Header() {
    return (
        <header>
        <div className="header__image">
            <img src={MainImage} alt=""/>
        </div>
        <h1 className="header__text"> Countries </h1>
        </header>
    )
}

export default Header