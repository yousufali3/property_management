const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// Create new property
router.post("/create_new_property", async (req, res) => {
  const { propertyName, address, city, state } = req.body;
  try {
    const newProperty = new Property({ propertyName, address, city, state });
    await newProperty.save();
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Fetch property details by city
router.get("/fetch_property_details/:city", async (req, res) => {
  const { city } = req.params;
  try {
    const properties = await Property.find({ city });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Update property details
router.put("/update_property_details", async (req, res) => {
  const { property_id, propertyName, address, city, state } = req.body;
  try {
    await Property.findByIdAndUpdate(property_id, {
      propertyName,
      address,
      city,
      state,
    });
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Find cities by state
router.get("/find_cities_by_state/:state", async (req, res) => {
  const { state } = req.params;
  try {
    const cities = await Property.distinct("city", { state });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Find similar properties
router.get("/find_similar_properties/:property_id", async (req, res) => {
  const { property_id } = req.params;
  try {
    const property = await Property.findById(property_id);
    if (property) {
      const properties = await Property.find({ city: property.city });
      res.json(properties);
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
