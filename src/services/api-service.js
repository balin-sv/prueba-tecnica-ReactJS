export default class ApiService {
  constructor() {
    this._urlBase = "https://apis.digital.gob.cl/dpa";
    this._apiKey = "78f8fb437a7b38462a5a82e6debf2e92";
  }

  async getResourse(url) {
    const res = await fetch(`${this._urlBase}${url}`);
    if (!res.ok) {
      throw new Error("error" + res.status);
    }
    return await res.json();
  }

  async getWeather(a, b) {
    console.log("weather");
    const urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${a}&lon=${b}&exclude=minutely,hourly,alerts&appid=${this._apiKey}&lang=es&units=metric`;
    const res = await fetch(urlWeather);
    if (!res.ok) {
      throw new Error("error" + res.status);
    }
    return await res.json();
  }
}
