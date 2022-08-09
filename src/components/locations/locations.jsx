import React from 'react';

import './locations.scss';
import { Location } from './location';
import { observer } from 'mobx-react-lite';
import weather from '../../store/weather';

function Locations() {
  const cities = weather.favoriteCities;

  return (
    <div className="locations">
      <h2 className="locations__title">Added Locations:</h2>

      <ul className="locations__ul">
        {cities.map((city) => (
          <Location key={city} city={city} />
        ))}
      </ul>
    </div>
  );
}

export default observer(Locations);
