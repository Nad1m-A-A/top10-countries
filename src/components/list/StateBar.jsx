import { listContext } from '../../store/data';
import { useContext } from 'react';
import MainContext from '../../context/main-context';
import { FaSort } from 'react-icons/fa'



function StateBar() {
    const CTX = useContext(MainContext);

    const sortHandler = () => {
        CTX.sortAspect(CTX.sortingState);
    }

    const stringSorter = () => {
        let text;
        if(CTX.aspectName === 'wealthy' || CTX.aspectName === 'poor') text = 'GDP';
        if(CTX.aspectName === 'intelligent') text = 'AVG IQ';
        if(CTX.aspectName === 'at_war') text = 'Fatalities';
        if(CTX.aspectName === 'dangerous') text = 'Crime Index';
        if(CTX.aspectName === 'high_salary') text = 'AVG Income';

        return text;
    }


  return (
    <div className="state-bar">
    {listContext.map((text,index) => 
        <span key={index} className={text === 'Numbers' ? 'special' : ''}>{
          text === 'Numbers' ? stringSorter() : text
        }
        {text === 'Numbers' && <button className='sort-button' onClick={sortHandler}>
          <FaSort/>
        <span className='sorting-state'>{CTX.sortingState}</span>
          </button>}
        </span>
        )}
</div>
  )
}

export default StateBar;