const API_KEY = process.env.REACT_APP_API_KEY;

export const SERVER = 'https://api.openweathermap.org/data/2.5/';

const DOMAIN = {
  MAIN: 'https://openweathermap.org/',
  API: 'https://api.openweathermap.org/',
};

export const getUrl = ({ city = 'Aktobe', type = 'weather', coords = {} }) => {
  if (coords.latitude) {
    return `${DOMAIN.API}data/2.5/${type}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`;
  }

  return `${DOMAIN.API}data/2.5/${type}?q=${city}&appid=${API_KEY}&units=metric`;
};

export const getIconUrl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@4x.png`;

export const getForecastIconUrl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}.png`;
