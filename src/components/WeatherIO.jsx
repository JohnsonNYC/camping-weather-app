import { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import Header from "./Header";
import Gallery from "./Gallery";
// Services + Utils
import { getWeatherData } from "../services/weather.services";
import { formatDate } from "../utils/dates.utils";
// Assets  + Keys

const today = new Date();
let thirtyDaysFromNow = new Date();
thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

const formattedToday = formatDate(today);
const formatted30DaysAhead = formatDate(thirtyDaysFromNow);

const dayOfWeekNumber = today.getUTCDay();

const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const periodMap = { "morning": [0, 11], 'afternoon': [12, 18], 'evening': [19, 23] }

let currentHour = today.getHours();
let periodOfDay;

for (let period in periodMap) {
  let range = periodMap[period];
  if (currentHour >= range[0] && currentHour <= range[1]) {
    periodOfDay = period;
    break;
  }
}

const WeatherIO = () => {
  const [selectedDay, setSelectedDay] = useState(dayNames[dayOfWeekNumber]);
  const [selectedPeriod, setSelectedPeriod] = useState(periodOfDay);
  const [location, setLocation] = useState("169 Madison Ave #2199 New York, NY 10016");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);


  const handleGetUserLocationSuccess = (position) => {

    const { coords } = position || {};
    const { latitude, longitude } = coords || {};

    const formattedCoord = encodeURIComponent(`${latitude},${longitude}`);
    setLocation(formattedCoord)
    handleGetWeatherData(formattedCoord)
  }

  const handleGetUserLocationError = () => {
    setErrorMessage("Unable to get User Location: Please enter it")
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const handleGetWeatherData = async (location) => {
    try {
      let res = await getWeatherData(location, formattedToday, formatted30DaysAhead);
      if (res && res.status == 200) {
        setWeatherData(res.data)
      } else if (res && res.response && res.response.status == 429) {
        setErrorMessage("Exceeded the maximum allowable requests. Try again tomorrow")
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000)
      } else {
        setErrorMessage("Make sure you've added a proper locations")
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000)
      }
    } catch (e) {
      setErrorMessage(e)
    }
  }

  const handleChangeDay = (e) => {
    const newDay = e.target.value
    setSelectedDay(newDay)
  }

  const handleChangePeriod = (e) => {
    const newPeriod = e.target.value;
    setSelectedPeriod(newPeriod)
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGetUserLocationSuccess, handleGetUserLocationError)
    } else {
      setErrorMessage("Geolocation not supported")
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  useEffect(() => {
    const formattedLocation = encodeURIComponent(location)
    handleGetWeatherData(formattedLocation)
  }, [])


  return (
    <Wrapper>
      <Header
        weatherData={weatherData}
        selectedDay={selectedDay}
        selectedPeriod={selectedPeriod}
        currLocation={location}
        handleGetWeatherData={handleGetWeatherData}
        handleChangeDay={handleChangeDay}
        handleChangePeriod={handleChangePeriod}
        errorMessage={errorMessage}
        getCurrentLocation={getCurrentLocation}
      />
      <Gallery weatherData={weatherData} selectedDay={selectedDay} selectedPeriod={selectedPeriod} />
    </Wrapper>
  );
};

export default WeatherIO;

const Wrapper = styled.div`
  padding: 0px 10px; 
`;