import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () =>{

    const [city, setCity] = useState(null);

    const [ search, setSearch] = useState("Dhaka");

    useEffect( () => {
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=69e20ac86db4f7a545b2d9bcb3c740f8`
            const response = await fetch(url);
            const resJson = await response.json();
            
            setCity(resJson.main);
        }
        fetchApi();
    },[search] )

    return(
        <>
        <div className="title">
        <h1>Live Search Weather</h1>
        </div>

        <div className="box">
            <div className="inputData">
                <input type="search" value={search} className="inputField" onChange= { (event) =>{
                    setSearch(event.target.value)
                }} />
            </div>

                {!city ? (
                    <p className="errorMsg"> No Data Found</p>
                ) : (
                <div>
                <div className="info">
                <h2 className="location"> 
                <i className="fas fa-street-view"></i> {search}
                </h2>
                <h1 className="temp">
                {city.temp}°Cel
                </h1>

                <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max :  {city.temp_max}°Cel  </h3>
            </div>

           
            </div>
                )

                }
            
        </div>

        </>
    )
}
export default Tempapp;