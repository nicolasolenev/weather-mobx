import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';
import * as ls from 'local-storage';

import { getUrl } from '../api';

const { selectedCity, favoriteCities } = ls.get('weather') || {};

class Weather {
  selectedCity = selectedCity || 'Aktobe';
  favoriteCities = favoriteCities || [];
  isFetching = true;
  errorMessage = null;
  data = {
    weather: {},
    forecast: [],
  };

  constructor() {
    makeAutoObservable(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  addFavorite(city) {
    this.favoriteCities.push(city);
  }

  deleteFavorite(city) {
    this.favoriteCities = this.favoriteCities.filter(
      (favoriteCity) => favoriteCity !== city
    );
  }

  async fetchWeather({ city, coords }) {
    try {
      this.isFetching = true;
      this.errorMessage = null;
      const resWeather = await axios.get(getUrl({ city, coords }));
      const resForecast = await axios.get(
        getUrl({ city, type: 'forecast', coords })
      );

      runInAction(() => {
        this.selectedCity = resWeather.data.name;
        this.data.weather = resWeather.data;
        this.data.forecast = resForecast.data.list;
        this.isFetching = false;
      });
    } catch (e) {
      runInAction(() => {
        this.isFetching = false;
        this.errorMessage = e.response?.data?.message || e.message;
      });
    }
  }
}

export default new Weather();
