import { createContext } from "react";

const MainContext = createContext({
    data: null,
    activeAspect: [],
    loading: false,
    sortedAspect: [],
    setAspect: (text) => {},
    setLoading: () => {},
    sortAspect: () => {},
})

export default MainContext;
















//   const rich = ['Qatar', 'Kuwait'];
// const addHere = [];

// async function test() {
//     const res = await fetch('https://restcountries.com/v3.1/all');
//     const data = await res.json();
//     data[0].sexy = 'yes it is'
//     console.log(data[0].sexy)
//     console.log(data[0]);
//     const countriesName = data.map((el, i) => {
//         const target = el.name.common;
//         if(rich.includes(target)) addHere.push(el)
//     })
//     console.log(addHere);
// }

// test();

