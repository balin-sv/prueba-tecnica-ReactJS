import React from "react";

const WeatherReportDay = ({ data }) => {
  return (
    <tr key={data.dateString}>
      <th scope="row">{data.dateString}</th>
      <td>{data.sky}</td>
      <td>{data.tempMax}</td>
      <td>{data.tempMin}</td>
    </tr>
  );
};
export default WeatherReportDay;
