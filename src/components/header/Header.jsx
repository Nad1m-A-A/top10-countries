import music from "../../store/music/Vivaldi_ Concerto for 4 Violins in B minor RV 580.mp3";
import MainImage from "../../store/images/Pexels.jpg";
import './header.css';
import {MdMusicNote, MdMusicOff} from 'react-icons/md'; 
import { useState, useRef } from "react";

function Header() {
    const [isPlaying, setIsPlaying] = useState(false);
    const song = useRef();

    const toggleMusic = () => {
        if(isPlaying) {
            song.current.pause();
            setIsPlaying(false);
        }
        if(!isPlaying) {
            song.current.play();
            setIsPlaying(true);
        }
        console.log(song);
    }

    return (
        <header>
            <div className="header__image">
                <img src={MainImage} alt=""/>
            </div>
            <h1 className="header__text"> Countries </h1>

            {isPlaying && <MdMusicNote onClick={toggleMusic} className="note">
            </MdMusicNote>}
            {!isPlaying && <MdMusicOff onClick={toggleMusic} className="note">
            </MdMusicOff>}

            <audio src={music} ref={song} loop></audio>
        </header>
    )
}

export default Header