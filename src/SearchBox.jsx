import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";
import { colors } from "@mui/material";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  //is information ko alag file me banna chahiye lekin abhi lern stage me chalta h
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a541682ac42a4cb1ad5253e7ddadda30";

  // ?q={city name}&appid={API key}
  let getWeatherInfo = async (city) => {
    try{
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();
      console.log(data);
      let result = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelLike: data.main.feels_like,
        weather: data.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="search-box">
      <h2>Search for the Wether</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No sach Place Exists!</p>}
      </form>
    </div>
  );
}
