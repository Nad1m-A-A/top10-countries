import music from "../assets/Vivaldi_ Concerto for 4 Violins in B minor RV 580.mp3";
import MainImage from "../assets/Pexels.jpg";
import {MdMusicNote, MdMusicOff} from 'react-icons/md'; 
import { useState, useRef } from "react";
import classes from '../assets/styles/Main.module.css'

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
    }

    return (
        <header>
            <div className={classes.header__image}>
                <img src={MainImage} alt=""/>
            </div>
            <h1 className={classes.header__text}> Countries </h1>

            {isPlaying && <MdMusicNote onClick={toggleMusic} className={classes.note}>
            </MdMusicNote>}
            {!isPlaying && <MdMusicOff onClick={toggleMusic} className={classes.note}>
            </MdMusicOff>}

            <audio src={music} ref={song} loop></audio>
        </header>
    )
}

export default Header