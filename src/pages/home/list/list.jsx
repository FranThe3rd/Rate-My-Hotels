import React from 'react'
import { useEffect, useState } from 'react'
import './list.css'

const List = () => {
    const [hotel, setHotels] = useState([])

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

    const getRatingValue = (ratingStr) => {
        const ratingMap = {
            'OneStar': 1.0,
            'TwoStar': 2.0,
            'ThreeStar': 3.0,
            'FourStar': 4.0,
            'FiveStar': 5.0,
            'All': 6.0
        };
        return ratingMap[ratingStr] || 0;
    };

    // Function to extract city and state/country
    const getLocation = (hotelData) => {
        const city = hotelData.cityName || '';
        const country = hotelData.countyName || '';
        return `${city}, ${country}`;
    };

    return (
        <div className='list-page'>
            <input className='input-list' type="text" />

            <div className='list-div'>
                {hotel.map((hotelItem) => (
                    <div className='list-card' key={hotelItem.id}>
                        <div className="left">
                            <p className="quality-label">QUALITY</p>
                            <div className="score-box">
                                <span className="score">{getRatingValue(hotelItem.hotelRating).toFixed(1)}</span>
                            </div>
                            <p className="ratings">{hotel.length} ratings</p>
                        </div>

                        <div className="middle">
                            <h1 className="school-name">{hotelItem.hotelName}</h1>
                        </div>

                        <div className="right">
                            <p className="location">{getLocation(hotelItem)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List