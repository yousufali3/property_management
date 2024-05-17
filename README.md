# Property Management API

This project is a property management web application using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Requirements

- Node.js
- MongoDB

## Setup

1. **Backend**:
   ```bash
   cd server
   npm install
   node app.js
2. **frontend**:
   ```bash
   cd clint
   npm install
   npm run dev


**Endpoints**

POST /api/properties/create_new_property 

GET /api/properties/fetch_property_details/:city

PUT /api/properties/update_property_details

GET /api/properties/find_cities_by_state/:state

GET /api/properties/find_similar_properties/:property_id







