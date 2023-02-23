const { json } = require("body-parser");
const express = require("express");
const app = express();
const https = require("https");
const { join } = require("path");
const send = require("send");
const bodyPars = require("body-parser");
const { url } = require("inspector");

app.use(bodyPars.urlencoded({extended:true}));


app.get( "/" , function (req,res) {

res.sendFile (__dirname +"/index.html");

})

// "mecca"

app.post("/" , function (req, res) {

  const appid1 = "683e0a1383a018b29c1da4d66725d4fd";
  const cities = req.body.cities;
  const uni = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+cities+"&appid="+ appid1+"&units="+uni;
  https.get(url, function (params) {
    
    params.on("data",function (data) {
      const weatherr = JSON.parse(data);
      const temp = weatherr.main.temp;
      const dess = weatherr.weather[0].description;
      const iconn = weatherr.weather[0].icon;
      const imgg = "https://openweathermap.org/img/wn/"+ iconn + "@2x.png"
      res.write(`<p>the weather in ${cities}</p>`)
      res.write(`<h1>the temper is ${temp.toFixed(0)} and the weather is ${dess}</h1>`)
      res.write("<img src="+imgg + ">")
      res.send()
    })
  })

})








app.listen("3000", function () {
  console.log("hello");
}

)