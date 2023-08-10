import React from 'react';

type Props = {
    main?:boolean;
  weather: {
    name?: string;
    main?: {
      temp?: string;
      feels_like?: string;
      temp_min?: string;
      temp_max?: string;
      pressure: string;
      humidity?: string;
    };
    time?:string
  };
};

const WeatherCard = ({weather,main=false}: Props) => {
    let textStyle = main?'text-3xl text-center':'text-2xl'
  return (
    <div>
      <h1 className={textStyle}>{weather.name}</h1>
      <h2>
        Temperature: {(Number(weather.main?.temp) - 273.16).toFixed(2)}{' '}
        °C
      </h2>
      <h2>
        Feels Like:{' '}
        {(Number(weather.main?.feels_like) - 273.16).toFixed(2)} °C
      </h2>
      <h2>Humidity: {Number(weather.main?.humidity)}%</h2>
      {weather.time && (<h2>
        Fetched:{' '}
        {weather.time}
      </h2>)}
    </div>
  );
};

export default WeatherCard;
