import { useState, useEffect, useRef } from "react";

function useFetch() {
    const initialRender = useRef(false);

    const [data, setData] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log('hook');
            if(initialRender.current) {
                fetch('https://restcountries.com/v3.1/all')
                .then((response) => {
                    if(!response.ok) throw new Error(response.status);
                    return response.json()
                })
                .then((data) => {
                    setData(data)
                })
                .catch((err) => {
                    setError(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
            }

            else {
                initialRender.current = true;
            }
    }, [])

    return {data, loading, error};
}

export default useFetch;