import { buttonsContext } from '../store/data';
import { useContext} from 'react';
import MainContext from '../context/main-context';

function Buttons() {
    const CTX = useContext(MainContext);

    const aspectHandler = (e) => {
        CTX.setLoading();
        // CTX.setAspect(e.target.getAttribute('text').toLowerCase());
        CTX.fetchData(e.target.getAttribute('text').toLowerCase());
    }


    return (
        <div className="btns__wrapper">
            {buttonsContext.map((text,index) => {
                return <button key={index} className={text.toLocaleLowerCase() === CTX.aspectName && !CTX.loading ? 'btn__active btn' : 'btn'} text={text} onClick={aspectHandler}>{text.split('_').join(' ')}</button>
            })}
        </div>
    )
}

export default Buttons;