import './field.css'

import MainContext from '../context/main-context';
import { useContext } from 'react';

import List from './List';
import Cards from './Cards'

function Field() {
    const CTX = useContext(MainContext);
    const display = CTX.display;

    return (
        <div className={CTX.fadeIn ? 'field-fade-in field' : 'field'}>
            {display === 'list' &&  <List/>} 
            {display === 'cards' && <Cards/>}
        </div>
    )
}

export default Field;




    // const aspect = CTX.sortingState === 'random' ? CTX.activeAspect : CTX.sortedAspect;

    // const content = 
    // <>
    // {aspect.map(country => {
    //     return (
    //         CTX.display === 'list' ?
    //         <>
    //         <StateBar/>
    //         <Item
    //         key={country.name.common}
    //         name={country.name.common}
    //         languages={country.languages}
    //         flag={country.flags.png}
    //         continents={country.continents[0]}
    //         numbers={country.numbers}
    //         description={country.description}>
    //         </Item></> :
    //         'ops'
    //     )
    // })}
    // </>























// import './field.css'
// import StateBar from './StateBar';

// import MainContext from '../context/main-context';
// import { useContext } from 'react';
// import Item from './Item';

// function Field() {
//     const CTX = useContext(MainContext);

//     const aspect = CTX.sortingState === 'random' ? CTX.activeAspect : CTX.sortedAspect;


//     return (
//         <div className={`${CTX.display} + field`}>
//             {CTX.display === 'list' && <StateBar/>}

//             {aspect.map(country => 
                // <Item
                // key={country.name.common}
                // name={country.name.common}
                // languages={country.languages}
                // flag={country.flags.png}
                // continents={country.continents[0]}
                // numbers={country.numbers}
                // description={country.description}>
                // </Item>
//                 )}

//         </div>
//     )
// }

// export default Field;