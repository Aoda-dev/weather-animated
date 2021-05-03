import { useState, Fragment } from 'react';
import './App.css';

import rainy from './assets/animated/rainy-6.svg';
import cloudy from './assets/animated/cloudy.svg';
import clear from './assets/animated/day.svg';

import Form from './components/Form/Form';

const api = {
  key: 'fbe339d9bcfb89ed25a49b6efdd4aa59',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [svg, setSvg] = useState(cloudy);
  const [weather, setWeather] = useState({});

  const search = (query) => {
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);

        if (result.weather[0].main === 'Rain') {
          setSvg(rainy);
        }
        if (result.weather[0].main === 'Clouds') {
          setSvg(cloudy);
        }
        if (result.weather[0].main === 'Clear') {
          setSvg(clear);
        }
      });
  };

  return (
    <div className='App'>
      <div className='bg'></div>
      <div className='Content'>
        <Form search={search} />
        {weather.name ? (
          <Fragment>
            <h1 className='Content__title'>{weather.name}</h1>
            <img src={svg} alt='' />
            <span className='Content__span'>
              <h1 className='Content__span__title'>{weather.main.temp}</h1>
              <strong>o</strong>
            </span>
            <p className='Content__text'>{weather.weather[0].description}</p>
          </Fragment>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
