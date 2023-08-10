'use client';
import { useEffect, useState } from 'react';
import {
  useGetWatherLocationMutation,
  useRetrieveWeatherMutation,
  useStoreWeatherMutation,
} from '../api';
import WeatherCard from '../components/weatherCard';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import TemperaturePlot from '../components/TemperatureChart';
import StandardButton from '../components/StandardButton';
type weatherObject = {
  name?: string;
  main?: {
    temp?: string;
    feels_like?: string;
    temp_min?: string;
    temp_max?: string;
    pressure: string;
    humidity?: string;
  };
  time?: string;
};

export default function Weather() {

//Variable declarations
  const fetchRate = 10; //in seconds
  const [fetchStatus, setFetchStatus] = useState(true);
  const [prevSearch, setPrevSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [currentWeather, setCurrentWeather] = useState<weatherObject>({});
  const [storedTemepratures, setStoredTemperatures] = useState([]);
  const [getWeatherTrigger] = useGetWatherLocationMutation();
  const [storeTrigger] = useStoreWeatherMutation();
  const [retrieveTrigger] = useRetrieveWeatherMutation();
  const [showStoredTemps, setShowStoredTemps] = useState(false);
  const [chartData,setChartData] = useState<any>()


  //Button Handlers
  const handleStopFetching = () => {
    setFetchStatus(!fetchStatus);
  };

  const handleStoreTemp = async () => {
    if (currentWeather.name) {
      const response: any = await storeTrigger({
        currentWeather,
      });
    }
  };

  const handleRetrieveTemp = async () => {
    const response: any = await retrieveTrigger({});
    setStoredTemperatures(response.data);
    if (response.data) setShowStoredTemps(!showStoredTemps);
    console.log(response.data);
  };

  const handleGetWeather = async (location?: string) => {
    if (location) {
      const response: any = await getWeatherTrigger({
        locationName: location,
      });
      setCurrentWeather({
        name: response.data.current?.name,
        main: response.data.current?.main,
        time: response.data.current?.time,
      });
      setChartData(response.data.historical)
      console.log(response.data.historical.temperature_2m);
    } else {
      const response: any = await getWeatherTrigger({
        locationName: locationSearch,
      });
      setCurrentWeather({
        name: response.data.current?.name,
        main: response.data.current?.main,
        time: response.data.current?.time,
      });
      setChartData(response.data.historical)
      setPrevSearch(locationSearch);
      console.log(response.data.historical.temperature_2m);
    }
    setFetchStatus(true);
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-4 z-10 max-w-5xl w-full flex-col sm:flex-row justify-center items-center sm:justify-between font-mono text-sm sm:flex gap-4">
        <div className=" left-0 top-0 flex  w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <input
            className="bg-transparent w-full text-center"
            value={locationSearch}
            onChange={(e) => {
              setLocationSearch(e.target.value);
            }}
            placeholder="Where do you want to find the weather for?"
          />
        </div>
        <button
          onClick={() => {
            handleGetWeather();
          }}
          className="text-center w-full sm:w-auto mt-2 sm:mt-0"
        >
          Fetch
        </button>
      </div>
      <div onClick={handleStopFetching}  className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-10 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {currentWeather.name ? (
          <div className="text-center z-30 mb-10">
            <div className="flex-row flex items-center gap-4 z-10">
              <CountdownCircleTimer
                isPlaying={fetchStatus}
                duration={fetchRate}
                colors={['#003866', '#00457D', '#0163B3', '#157FD5', '#7BC1FB']}
                colorsTime={[10, 7, 5, 2, 1]}
                onComplete={() => {
                  if (prevSearch) {
                    console.log(currentWeather.name);
                    handleGetWeather(prevSearch);
                  }
                  return { shouldRepeat: true, delay: 0 };
                }}
              >
                {({ remainingTime }) => (
                  <button onClick={handleStopFetching}  className="cursor-pointer flex z-30">
                    {remainingTime}
                  </button>
                )}
              </CountdownCircleTimer>

              <WeatherCard main weather={currentWeather} />
            </div>
          </div>
        ) : (
          <div className=" z-30">
            <h1 className="text-2xl">
              Fetch the weather for any city in the world!
            </h1>
          </div>
        )}
      </div>

      {chartData && (
        <div className='mx-20 w-full'>
        <TemperaturePlot time={chartData.time} temperature_2m={chartData.temperature_2m}/>
        </div>
      )}

      {storedTemepratures.length && showStoredTemps ? (
        <div className="mb-8 grid w-6xl lg:w-full lg:mb-0 lg:grid-cols-3 grid-cols-2 lg:text-left">
          {[...storedTemepratures].reverse().map((data, i) => (
            <div className="m-8" key={i}>
              <WeatherCard weather={JSON.parse(data)} />
            </div>
          ))}
        </div>
      ) : (
        <div />
      )}

      <div className="mb-10 mt-10 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <StandardButton title={`${fetchStatus ? 'Stop' : 'Resume'} Fetching`} description={'Stop fetching weather data automatically'} action={handleStopFetching}/>
        <StandardButton title={`Store Temperature`} description={'Store the current temperature reading'} action={handleStoreTemp}/>
        <StandardButton title={`${!showStoredTemps ? 'Retrieve' : 'Hide'} Stored Temperatures`} description={'Show the five most recent temperature readings'} action={handleRetrieveTemp}/>
      </div>
    </main>
  );
}
