import React from 'react'
import "../styles/Weather.css"
import Cloud from "../assets/cloud.png"
import Air from "../assets/air.png"
import Humidity from "../assets/humidity.png"


const WeatherDetails = ({icon, temp, city, country, lat, lon, humidity, wind}) => {
   
  return (
    <>
        <img className="image" src={icon} alt="img" />
        <div className="temp">{temp}°C</div>
        <div className="city">{city}</div> 
        <div className="country">{country}</div>
        <div className='lat-lon'>
            <div>
                <span className="lat">Latitude</span>
                <span className='lat'>{lat}</span>
            </div>
            <div> 
                <span className="lon">Longitude</span>
                <span className='lon'>{lon}</span>
            </div>
        </div>
        <div className='humid-air'>
            <div>
                <img className="humidity" src={Humidity} alt='humidity'/><br/>
                <span className="humidity-percentage">{humidity} %</span><br/>
                <span className="humidity-text">Humidity</span>
            </div>
            <div>
                <img className="air" src={Air} alt='air' /><br/>
                <span className="air-speed">{wind} km/h</span><br/>
                <span className="air-text">Wind speed</span>
            </div>
        </div>    
    </>
  )
}

export default WeatherDetails