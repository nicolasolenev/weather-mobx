import React from 'react';

import './weatherNow.scss';
import { getIconUrl } from '../../api';
import weather from '../../store/weather';
import { observer } from 'mobx-react-lite';

function WeatherNow() {
  const data = weather.data.weather;

  const addHandler = () => weather.addFavorite(data.name);

  return (
    <div className="weather__now">
      <div className="weather__temperature">
        {data.main ? `${Math.round(data.main.temp)}°` : ''}
      </div>
      <img
        className="weather__icon"
        src={data.weather ? getIconUrl(data.weather[0].icon) : ''}
        alt={data.weather}
      />
      <div className="weather__city">{data.name || ''}</div>
      <div className="weather__add-location">
        {!weather.favoriteCities.includes(data.name) && (
          <button
            className="weather__add-location-button"
            title="add to favorite"
            onClick={addHandler}
          />
        )}
      </div>
    </div>
  );
}

export default observer(WeatherNow);
