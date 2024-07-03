import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp() {

    const [weatherInfo, setWheatherInfo] = useState({
      city: "Delhi",
      feelLike: 26.05,
      humidity: 100,
      temp: 26.05,
      tempMax: 26.05,
      tempMin: 26.05,
      weather: "mist",
    });

    let updateInfo = (newInfo) => {
      setWheatherInfo(newInfo);
    }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by Dealta </h1>

      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
