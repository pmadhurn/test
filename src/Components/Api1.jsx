import { useState, useEffect } from 'react';
import axios from 'axios';

const Api1 = () => {
  const [data, setData] = useState(null); // Initialize as null to represent no data initially
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error status

  useEffect(() => {
    axios
      .get(
        'http://api.weatherapi.com/v1/current.json?key=25e4e7261e6146c0875115027250901&q=Ahmedabad&aqi=no'
      )
      .then((res) => {
        setData(res.data);
        setLoading(false); // Data fetched successfully, set loading to false
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch data'); // Set error message
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Render loading state
  }

  if (error) {
    return <p>{error}</p>; // Render error message
  }

  return (
    <div className="content">
      {data && (
        <div className="weather-container">
          <h1>
            Weather in {data.location.name}, {data.location.region}
          </h1>
          <p>
            <strong>Temperature:</strong> {data.current.temp_c}°C
          </p>
          <p>
            <strong>Condition:</strong> {data.current.condition.text}
          </p>
          <img
            src={data.current.condition.icon}
            alt="weather-icon"
            className="weather-icon"
          />
          <p>
            <strong>Humidity:</strong> {data.current.humidity}%
          </p>
          <p>
            <strong>Wind:</strong> {data.current.wind_kph} kph (
            {data.current.wind_dir})
          </p>
          <p>
            <strong>Pressure:</strong> {data.current.pressure_mb} mb
          </p>
          <p>
            <strong>Visibility:</strong> {data.current.vis_km} km
          </p>
        </div>
      )}
    </div>
  );
};

export default Api1;
