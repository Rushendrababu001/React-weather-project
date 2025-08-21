import React, { useEffect, useRef, useState } from "react";
import Search from "../assets/search.png"
import Cloud from "../assets/cloud.png"
import clear from "../assets/clear.png"
import drizzle from "../assets/drizzle.png"
import rain from "../assets/rain.png"
import snow from "../assets/snow.png"
import thunder from "../assets/thunder.png"
import cloudy from "../assets/cloudy.png"
import "../styles/Home.css"
import WeatherDetails from "./WeatherDetails";


const Home = () => {
    const[text,setText] = useState("Vellore")
    const[icon,setIcon] = useState(Cloud);
    const[temp,setTemp] = useState(0);
    const[city,setCity] = useState("Chennai");
    const[country,setCountry] = useState("IN")
    const[lat,setLat] = useState("10");
    const[lon,setLon] = useState("10");
    const[humidity,setHumidity] = useState("20");
    const[wind,setWind] = useState("5");
    const[nocity, setNocity] = useState(""); 
    const APIkey = "24056c01424024af48c8d09e5564b666";

    const weathericon = {
      "01d":clear,
      "01n":clear,
      "02d":Cloud,
      "02n":Cloud,
      "03d":drizzle,
      "03n":drizzle,
      "04d":cloudy,
      "04n":cloudy,
      "09d":rain,
      "09n":rain,
      "10d":rain,
      "10n":thunder,
      "11d":thunder,
      "11n":thunder,
      "13d":snow,
      "13n":snow,
    };

   async function search() {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${APIkey}&units=Metric`);
      const result = await res.json();
      let data = result;
      console.log(data)
      
      if(data.cod === "404") {
        setNocity("City not found");
        return;
      }
      if(data.cod === "400") {
        alert("Enter a valid city name")
      }

      setNocity("");

      setTemp(data.main.temp)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setLat(data.coord.lat)
      setLon(data.coord.lon)
      setCity(data.name)
      setCountry(data.sys.country)
      const weathervalue = data.weather[0].icon;
      setIcon(weathericon[weathervalue])

    }
    useEffect (() => {
      search(text);
    },[]);

    const handlechange = (e) =>{
      setText(e.target.value);
    }

    const handlekey = (e) => {
      if(e.key === "Enter") {
        search(); 
      }
    }
  
    return (
    <div className="input-page" >
        <div className="input-page2 ">
            <input  className="input-search" placeholder='search your city' onChange={handlechange} value={text} onKeyDown={handlekey}/>
            <img className="search-icon" src={Search} alt='searchicon' onClick={() => search()}/>
      </div>

      {nocity ? (<p className="nocity">{nocity}</p>):(
        <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} lon={lon} humidity={humidity} wind={wind} />
      )}
    </div>

  )
}

export default Home