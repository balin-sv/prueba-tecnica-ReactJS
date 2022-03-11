import React from "react";
import WeatherReportDay from "../weather-report-day/weather-report-day";

const WeatherReportList = ({ data }) => {
  const list = data.map((dayReport) => {
    return <WeatherReportDay data={dayReport} />;
  });
  return <>{list}</>;
};
export default WeatherReportList;
