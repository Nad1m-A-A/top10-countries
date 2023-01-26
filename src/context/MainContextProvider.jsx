import { useReducer } from 'react';
import MainContext from './main-context';
import { top_10s } from '../assets/data';

const initialState = {
    data: null,
    activeAspect: [],
    aspectName: '',
    loading: false,
    error: null,
    display: 'list',
    sortingState: 'random',
    sortedAspect: [],
    fadeIn: true,
}

const reducer = (state, action) => {

    if(action.type === 'SET_DATA') {
        return {...state, data: action.payload};
    }

    if(action.type === 'SET_ASPECT') {
        const needed = state.data.filter(item => {
            for(let x = 0; x < top_10s[action.payload].length; x++) {
                if(item.name.common === top_10s[action.payload][x].country) {
                    item.description = top_10s[action.payload][x].description;
                    item.numbers = +top_10s[action.payload][x].numbers;
                    return item;
                }
            }
            return null; // What about this ?
        });
        const neededSorted = needed.slice();
        neededSorted.sort((a,b) => {
            if(a.numbers > b.numbers) return 1;
            if(a.numbers < b.numbers) return -1;
            return 0;
        })
        return {...state, activeAspect: neededSorted, initialAspect: needed, loading: false, aspectName: action.payload, sortingState: '10-1' , fadeIn: true} 
    }

    if(action.type === 'SET_LOADING') {
        return {...state, loading: true}
    }

    if(action.type === 'SET_ERROR') {
        return {...state, loading: false, error: action.payload}
    }

    if(action.type === 'RESET_ERROR'){
        return {...state, error: null}
    }

    if(action.type === 'SORT_ASPECT') {
        let sorted = state.activeAspect.slice();
        if(action.payload === 'random') {
            sorted.sort((a,b) => {
                if(a.numbers > b.numbers) return 1;
                if(a.numbers < b.numbers) return -1;
                return 0;
            })
        // return {...state, sortedAspect: sorted, sortingState: '10-1', fadeIn: false}
        return {...state, activeAspect: sorted, sortingState: '10-1', fadeIn: false}
        }

        if(action.payload === '10-1') {
            sorted.sort((a,b) => {
                if(a.numbers > b.numbers) return -1;
                if(a.numbers < b.numbers) return 1;
                return 0;
            })
            // return {...state, sortedAspect: sorted, sortingState: '1-10', fadeIn: false};
            return {...state, activeAspect: sorted, sortingState: '1-10', fadeIn: false};
        }

        if(action.payload === '1-10') {
            // return {...state, sortingState: 'random', fadeIn: false};
            return {...state, sortingState: 'random', fadeIn: false, activeAspect: state.initialAspect};
        }
    }

    if(action.type === 'SET_DISPLAY'){
        if(state.display === 'list')
        return {...state, display: action.payload[1].value}
        else {
            return {...state, display: action.payload[0].value}
        }
    }

    return state;
}

function MainContextProvider(props) {
    const [reducerState, dispatch] = useReducer(reducer, initialState);

    const fetchData = (text) => {
        if(reducerState.data !== null) {
            setTimeout(() => {
                dispatch({type: 'SET_ASPECT', payload: text});
            },1000)
            return;
        }
        fetch('https://restcountries.com/v3.1/all')
        .then((response) => {
            if(!response.ok) throw Error(`An Error occurred With Status Code ${response.status} (${response.statusText})`);
            return response.json()
        })
        .then((data) => {
            dispatch({type:'SET_DATA', payload: data})
        })
        .then(() => {
            dispatch({type: 'SET_ASPECT', payload: text});
        })
        .catch((err) => {
            dispatch({type:'SET_ERROR', payload: err.message === 'Failed to fetch' ? `${err.message} 💥 Please check your internet connection.` : err.message})
        })
    }

    const setLoading = () => {
        dispatch({type: 'SET_LOADING'})
    }

    const sortAspect = (order) => {
        dispatch({type: 'SORT_ASPECT', payload: order})
    }

    const setDisplay = (e) => {
        dispatch({type: 'SET_DISPLAY', payload: e});
    }

    const resetError = () => {
        dispatch({type: 'RESET_ERROR'})
    }
    const contextValue = {
        data: reducerState.data,
        activeAspect: reducerState.activeAspect,
        aspectName: reducerState.aspectName,
        loading: reducerState.loading,
        error: reducerState.error,
        sortingState: reducerState.sortingState,
        sortedAspect: reducerState.sortedAspect,
        display: reducerState.display,
        fadeIn: reducerState.fadeIn,
        // setAspect: setAspect,
        fetchData: fetchData,
        setLoading: setLoading,
        sortAspect: sortAspect,
        setDisplay: setDisplay,
        resetError: resetError,
    }

    return (
        <MainContext.Provider value={contextValue}>{props.children}</MainContext.Provider>
    )
}

export default MainContextProvider;