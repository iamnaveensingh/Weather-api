import {
  getWeatherData,
  getWeatherDataHistory,
} from "../services/externalApiService.js";
import Location from "../models/locationModel.js";

export const getWeatherByLocationId = async (req, res) => {
  const { locationId } = req.params;
  try {
    const data = await Location.findById(locationId);
    const lat = data.latitude;
    const lon = data.longitude;
    const weatherData = await getWeatherData(lat, lon);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

function getUnixTimestamp(daysAgo) {
  const currentDate = new Date();
  const timestamp = currentDate.getTime() - daysAgo * 24 * 60 * 60 * 1000;
  return Math.round(timestamp / 1000);
}

export const weatherHistory = async (req, res) => {
  const { days, id } = req.query;

  const start = getUnixTimestamp(days);
  const end = getUnixTimestamp(0);

  try {
    const data = await Location.findById(id);
    const lat = data.latitude;
    const lon = data.longitude;
    const weatherDataHistory = await getWeatherDataHistory(
      lat,
      lon,
      start,
      end
    );
    res.json(weatherDataHistory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error",error });
  }
};
