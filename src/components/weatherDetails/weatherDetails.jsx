import React from 'react';

import './weatherDetails.scss';
import { getTime } from '../../functions';
import { observer } from 'mobx-react-lite';
import weather from '../../store/weather';

function WeatherDetails() {
  const data = weather.data.weather;

  return (
    <div className="weather__details">
      <ul className="weather__details_ul">
        <li className="weather__details_li weather__details_city">
          {data.name || 'City'}
        </li>
        <li className="weather__details_li">
          Temperature: {Math.round(data.main?.temp) || '0'}°
        </li>
        <li className="weather__details_li">
          Feels like: {Math.round(data?.main?.feels_like) || '0'}°
        </li>
        <li className="weather__details_li">
          Weather: {data.weather ? data.weather[0].main : 'Weather'}
        </li>
        <li className="weather__details_li">
          Sunrise: {data.sys ? getTime(data.sys.sunrise) : '00:00'}
        </li>
        <li className="weather__details_li">
          Sunset: {data.sys ? getTime(data.sys.sunset) : '00:00'}
        </li>
      </ul>
    </div>
  );
}

export default observer(WeatherDetails);
