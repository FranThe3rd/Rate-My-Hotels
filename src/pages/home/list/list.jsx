import React from 'react'
import { useEffect, useState } from 'react'
import './list.css'

const List = () => {
    const [hotel, setHotels] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('Grand')
    const itemsPerPage = 20

    async function getData(search) {
        const url = `http://localhost:5239/api/hotels/${search}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setHotels(result)
            setCurrentPage(1) 
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getData(searchTerm)
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

    const getLocation = (hotelData) => {
        const city = hotelData.cityName || '';
        const country = hotelData.countyName || '';
        return `${city}, ${country}`;
    };

    const getRatingColor = (rating) => {
        if (rating === 0) return '#cccccc'; 
        if (rating >= 5.5) return '#73e873'; 
        if (rating >= 4.5) return '#a3d977'; 
        if (rating >= 3.5) return '#d4e157'; 
        if (rating >= 2.5) return '#ffeb3b';
        if (rating >= 1.5) return '#ffb74d'; 
        return '#ff8a65'; 
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            getData(searchTerm)
        }
    };

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentHotels = hotel.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(hotel.length / itemsPerPage)

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className='list-page'>
            <input 
                className='input-list' 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search hotels..."
            />

            <div className='list-div'>
                {currentHotels.map((hotelItem) => (
                    <div className='list-card' key={hotelItem.id}>
                        <div className="left">
                            <p className="quality-label">QUALITY</p>
                            <div 
                                className="score-box"
                                style={{ background: getRatingColor(getRatingValue(hotelItem.hotelRating)) }}
                            >
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

            {totalPages > 1 && (
                <div className="pagination">
                    <button 
                        onClick={handlePrev} 
                        disabled={currentPage === 1}
                        className="pagination-btn"
                    >
                        Previous
                    </button>
                    <span className="page-info">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button 
                        onClick={handleNext} 
                        disabled={currentPage === totalPages}
                        className="pagination-btn"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default List