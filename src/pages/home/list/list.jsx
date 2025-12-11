import React from 'react'
import { useEffect,useState} from 'react'

const List = () => {

    const [hotel,setHotels] = useState([])


    async function getData() {
        const url = "http://localhost:5239/api/hotels/Grand";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setHotels(result)
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }



    useEffect(() => {
        getData()
    }, [])


    return (
        <div className='list-page'>


        </div>
    )
}

export default List
