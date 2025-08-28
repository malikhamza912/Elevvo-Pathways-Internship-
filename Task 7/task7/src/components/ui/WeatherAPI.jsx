import { useState, useEffect} from "react";
import Axios from "axios";

export default function WeatherAPI({ value,coords }) {
    const [weather, setWeather] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        setError(false);
        setLoading(true);
        const fetchWeather = async () => {
            try
            {
                let url;
                if (coords)
                {
                    url = `http://api.weatherapi.com/v1/current.json?key=608b415aa6094b98878150022252708&q=${coords.lat},${coords.long}&aqi=no`;
                }
                else
                {
                    const city = value || "Islamabad";
                    url = `http://api.weatherapi.com/v1/current.json?key=608b415aa6094b98878150022252708&q=${city}&aqi=no`;
                }

                const response = await Axios.get(url);
                setWeather(response.data);
                
            }

            catch(error)
            {
                setError(true);
            }

            finally
            {
                setLoading(false);
            }
        }
        fetchWeather();
    
    }, [value, coords]);

    return (
  <div className="p-4">
    {loading && <p className="text-gray-500">Loading...</p>}

    {error && (
      <p className="text-red-500 font-semibold">Error fetching weather data!</p>
    )}

    {weather && (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Weather Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            className="w-16 h-16"
          />
          <h3 className="text-2xl font-bold">{weather.location.name}</h3>
          <p className="text-gray-500 text-sm">
            {weather.location.region}, {weather.location.country}
          </p>
          <p className="text-4xl font-bold mt-4">{weather.current.temp_c}°C</p>
          <p className="text-gray-500">{weather.current.condition.text}</p>
        </div>

        {/* Feels Like */}
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center pt-14">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6974/6974836.png"
            alt={"feels like icon"}
            className="w-16 h-16"
          />
          <span className="text-gray-400 text-sm">Feels Like</span>
          <span className="text-xl font-semibold">
            {weather.current.feelslike_c}°C
          </span>
        </div>

        {/* Humidity */}
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center pt-14">
          <img
            src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
            alt={"humidity icon"}
            className="w-16 h-16"
          />
          <span className="text-gray-400 text-sm">Humidity</span>
          <span className="text-xl font-semibold">{weather.current.humidity}%</span>
        </div>

        {/* Wind */}
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
          <span className="text-gray-400 text-sm">Wind</span>
          <span className="text-xl font-semibold">
            {weather.current.wind_kph} km/h ({weather.current.wind_dir})
          </span>
        </div>

        {/* Pressure */}
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
          <span className="text-gray-400 text-sm">Pressure</span>
          <span className="text-xl font-semibold">
            {weather.current.pressure_mb} mb
          </span>
        </div>

        {/* UV Index */}
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
          <span className="text-gray-400 text-sm">UV Index</span>
          <span className="text-xl font-semibold">{weather.current.uv}</span>
        </div>
      </div>
    )}
  </div>
);

}