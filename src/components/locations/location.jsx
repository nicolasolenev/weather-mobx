import React from 'react';
import weather from '../../store/weather';

export function Location({ city }) {
  const cityHandler = () => {
    weather.fetchWeather({ city });
  };

  const deleteHandler = () => weather.deleteFavorite(city);

  return (
    <li className="locations__li">
      <button
        className="locations__city"
        title="get weather"
        onClick={cityHandler}
      >
        {city}
      </button>

      <button
        className="locations__city_delete-button"
        title="delete city"
        onClick={deleteHandler}
      />
    </li>
  );
}
