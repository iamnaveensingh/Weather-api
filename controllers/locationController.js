import Location from '../models/locationModel.js';

export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getLocationById = async (req, res) => {
  const { locationId } = req.params;
  try {
    const location = await Location.findById(locationId);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createLocation = async (req, res) => {
  const { name, latitude, longitude } = req.body;
  try {
    const newLocation = await Location.create({ name, latitude, longitude });
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

export const updateLocation = async (req, res) => {
  const { locationId } = req.params;
  const { name, latitude, longitude } = req.body;
  try {
    const location = await Location.findByIdAndUpdate(
      locationId,
      { name, latitude, longitude },
      { new: true }
    );
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

export const deleteLocation = async (req, res) => {
  const { locationId } = req.params;
  try {
    const location = await Location.findByIdAndDelete(locationId);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json({ message: 'Location deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
