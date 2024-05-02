import axios from "axios";
const WEATHER_API = import.meta.env.VITE_WEATHER_API_KEY;
console.log(WEATHER_API);
export const getWeatherData = async (location, startDate, endDate) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}?unitGroup=us&key=${WEATHER_API}&contentType=json`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (e) {
    return e;
  }
};

export const getUserLocation = (successCallback, errorCallback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
};
