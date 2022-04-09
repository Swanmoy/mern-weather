import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Weather() {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [desc, setDesc] = useState("");
  const [icon_url, setIcon_URL] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://swanmoy-weather-app1.herokuapp.com//weather", {
        params: { city: city },
      })
      .then((res) => {
        const data = res.data;
        setCity("");
        setTemp(data.main.temp);
        setDesc(data.weather[0].main);
        setPlace(data.name);
        setCountry(data.sys.country);
        setIcon_URL(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
      })
      .catch((err) => {
        console.log(err);
        setCity("");
        setTemp("");
        setDesc("");
        setPlace("");
        setCountry("");
        setIcon_URL("");
        setShowWarning(true);
      });
  };
  const getData = () => {
    if (temp !== "") {
      return (
        <>
          <p id='place'>
            {place}
            {",  "}
            {country}
          </p>
          <p id='temp'>
            {temp}
            <sup>0</sup>C
          </p>
          <p id='desc'>
            {desc}
            {"  "}
            <img src={icon_url} />
          </p>
        </>
      );
    }
  };
  useEffect(() => {
    if (showWarning) {
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    }
  }, [showWarning]);
  return (
    <>
      <p id='warning'>{showWarning ? "Please enter a valid city name" : ""}</p>
      <div className='main-container'>
        <div className='search'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Please enter your location'
              id='city_name'
              value={city}
              onChange={handleChange}
              autoComplete='off'
            />
            <input type='submit' value='Search' />
          </form>
        </div>
        <div className='weather-info'>
          <div className='top-layer'>
            <p id='weekday'>{dayName[new Date().getDay()]}</p>
            <p id='date'>
              {monthName[new Date().getMonth()]}
              {"    "}
              {new Date().getDate()}
              {"   ,  "}
              {new Date().getFullYear()}
            </p>
          </div>
          <div className='main-layer'>{getData()}</div>
        </div>
      </div>
    </>
  );
}
