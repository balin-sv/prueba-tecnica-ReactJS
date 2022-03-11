import React, { useEffect, useState, useContext } from "react";
import ApiService from "../../services/api-service";
import OptionList from "../option-list";
import { AppContext } from "../context/app-context";

const SelectForm = () => {
  const value = useContext(AppContext);
  const apiService = new ApiService();

  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState("");

  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState("");

  const [communes, setCommunes] = useState([]);
  const [commune, setCommune] = useState("");

  useEffect(() => {
    (async () => {
      try {
        let result = await apiService.getResourse("/regiones");
        setRegions(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (region === "") {
      return;
    }
    (async () => {
      try {
        let result = await apiService.getResourse(
          `/regiones/${region}/provincias`
        );
        setProvinces(result);
        setProvince(result[0].codigo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [region]);

  useEffect(() => {
    if (province === "") {
      return;
    }
    (async () => {
      try {
        let result = await apiService.getResourse(
          `/regiones/${region}/provincias/${province}/comunas`
        );
        setCommunes(result);
        setCommune(result[0].codigo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [province]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (commune === "") {
      return;
    }

    const result = communes.filter((item) => {
      return item.codigo === commune;
    });

    (async () => {
      try {
        let weather = await apiService.getWeather(result[0].lat, result[0].lng);
        value.setWeatherResponse(weather);
        value.setCommuneName(result[0].nombre);
      } catch (error) {
        console.log(error);
      }
    })();

    setCommune("");
    setRegion("");
    setProvince("");
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="exampleSelect1" className="form-label mt-4">
            REGION
          </label>
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
            className="form-select"
            id="exampleSelect1"
          >
            {region === "" ? <option>{"eliga region"}</option> : null}
            <OptionList data={regions} />
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1" className="form-label mt-4">
            PROVINCIA
          </label>
          <select
            value={province}
            onChange={(e) => {
              setProvince(e.target.value);
            }}
            className="form-select"
            id="exampleSelect1"
          >
            {region === "" ? null : <OptionList data={provinces} />}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1" className="form-label mt-4">
            COMMUNA
          </label>
          <select
            value={commune}
            onChange={(e) => {
              setCommune(e.target.value);
            }}
            className="form-select"
            id="exampleSelect1"
          >
            {province === "" ? null : <OptionList data={communes} />}
          </select>
        </div>
        <button className="btn btn-lg btn-primary mt-3">CONSULTAR</button>
      </form>
    </div>
  );
};

export default SelectForm;
