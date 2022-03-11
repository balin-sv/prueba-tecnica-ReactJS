import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app-context";
import WeatherReportList from "../weather-report-list";

const WeatherReport = () => {
  const value = useContext(AppContext);
  const [currentReport, setCurrentReport] = useState({});
  const [dailyReport, setDailyReport] = useState([]);

  useEffect(() => {
    const current = { ...value.weatherResponse.current };
    const currentWeather = Object.values({ ...current.weather });
    const currentSky = { ...currentWeather[0] };

    setCurrentReport({
      sky: currentSky.description,
      temp: current.temp,
    });
    const res = extractDailyReport();
    setDailyReport(res);
  }, [value.weatherResponse]);

  function extractDailyReport() {
    const daily = { ...value.weatherResponse.daily };
    const dailyWeather = Object.values(daily);
    let dailyArray = [];
    let tempMax;
    let tempMin;
    let sky;
    let date;
    let dateString;

    dailyWeather.forEach((element, index) => {
      if (index === 0 || index >= 5) {
        return;
      }
      tempMax = element.temp.max;
      tempMin = element.temp.min;
      sky = element.weather[0].description;
      date = new Date(element.dt * 1000);
      dateString = date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      dailyArray.push({ sky, tempMax, tempMin, dateString });
    });

    return dailyArray;
  }

  return (
    <div className="container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr className="table-danger">
            <th scope="row">Comuna</th>
            <td colSpan="3">{value.communeName}</td>
          </tr>
          <tr>
            <th scope="row">Latitud</th>
            <td colSpan="3">{value.weatherResponse.lat}</td>
          </tr>
          <tr>
            <th scope="row">Longitud</th>
            <td colSpan="3">{value.weatherResponse.lon}</td>
          </tr>
          <tr>
            <th scope="row">CLIMA ACTUAL</th>
            <td>{currentReport.sky}</td>
            <td colSpan="3">{currentReport.temp}°C</td>
          </tr>
          <tr className="table-info">
            <th scope="col">DIA</th>
            <th scope="col">Condicion de cielo</th>
            <th scope="col">Temp max °C</th>
            <th scope="col">Temp min °C</th>
          </tr>
        </thead>
        <tbody>
          <WeatherReportList data={dailyReport}></WeatherReportList>
        </tbody>
      </table>
    </div>
  );
};
export default WeatherReport;
