const PORT = 8000;
const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json("hi");
});

app.get("/weather", (req, res) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=51.507351&lon=-0.127758&units=imperial&appid=${process.env.REACT_APP_OPENWEATHERAPI}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
