import React, { useState } from 'react';

import './search.scss';
import weather from '../../store/weather';

export function Search() {
  const [value, setValue] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    weather.fetchWeather({ city: value });
    setValue('');
  };

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={formHandler}>
        <input
          className="search__input"
          type="text"
          placeholder="Aktobe"
          value={value}
          onChange={inputHandler}
        />

        <button className="search__button" title="get weather" />
      </form>
    </div>
  );
}
