import React, { useState } from "react";
import axios from "axios";

const PropertyForm = () => {
  const [property, setProperty] = useState({
    propertyName: "",
    address: "",
    city: "",
    state: "",
  });

  const [properties, setProperties] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/properties/create_new_property",
        property
      );
      setProperties(response.data);
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="propertyName"
          placeholder="Property Name"
          value={property.propertyName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={property.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={property.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={property.state}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Property</button>
      </form>
      <ul>
        {properties.map((prop) => (
          <li
            key={prop._id}
          >{`${prop.propertyName}, ${prop.address}, ${prop.city}, ${prop.state}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyForm;
