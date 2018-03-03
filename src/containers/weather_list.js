import React , { Component } from 'react';

import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map((weather) => {
      return weather.main.temp
    })
    const pressure = cityData.list.map((weather) => {
      return weather.main.pressure
    })
    const humidities = cityData.list.map((weather) => {
      return weather.main.humidity
    })
    const lon = cityData.city.coord.lon
    const lat = cityData.city.coord.lat
    return (
      <tr key={name}>
        <td>
        <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart
          data={temps} color="orange"
          />
        </td>
        <td>
          <Chart
          data={pressure} color="red"
          />
        </td>
        <td>
          <Chart
          data={humidities} color="black"
          />
        </td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>Tempraure (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return { weather }
}
export default connect(mapStateToProps)(WeatherList)
