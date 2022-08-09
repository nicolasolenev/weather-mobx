import { useEffect } from 'react';
import * as ls from 'local-storage';

import './App.scss';
import { Search } from './components/search';
import Info from './components/info';
import Locations from './components/locations';
import weather from './store/weather';

function App() {
  const onUnloadHandler = () => {
    ls.set('weather', {
      selectedCity: weather.selectedCity,
      favoriteCities: weather.favoriteCities,
    });
  };

  useEffect(() => {
    window.addEventListener('unload', onUnloadHandler);
    return () => window.removeEventListener('unload', onUnloadHandler);
  });

  useEffect(() => {
    const geo = navigator.geolocation;

    const successGeo = async ({ coords }) => {
      weather.fetchWeather({ coords });
    };

    const denyGeo = () => {
      weather.fetchWeather({ city: weather.selectedCity });
    };

    geo.getCurrentPosition(successGeo, denyGeo);
  }, []);

  return (
    <div className="container">
      <div className="weather">
        <Search />
        <div className="weather__container">
          <Info />
          <Locations />
        </div>
      </div>
    </div>
  );
}

export default App;
