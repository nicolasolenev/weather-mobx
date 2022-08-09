import React from 'react';

import './weatherForecast.scss';
import ForecastCard from './forecastCard';
import { observer } from 'mobx-react-lite';
import weather from '../../store/weather';

function WeatherForecast() {
  const data = weather.data.forecast;

  return (
    <div className="weather__forecast">
      <h2 className="weather__forecast_city">
        {weather.selectedCity || 'City'}
      </h2>

      <div className="weather__forecast_cards">
        {data.map((data) => (
          <ForecastCard key={data.dt} data={data} />
        ))}
      </div>
    </div>
  );
}

export default observer(WeatherForecast);
