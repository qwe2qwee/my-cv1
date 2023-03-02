
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const request = require("request");
const https = require("https");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function (req,res) {
  res.sendFile(__dirname+"/signup.html")
})


app.post ("/", function (req,resp) {
  const firstName= req.body.fir ;
  const lastName= req.body.sec;
  const email=req.body.em;
  const data = {
    members:[
      {
        email_address: email,
        status:"subscribed",
        merge_fields: {
          FNANE:firstName,
          LNAME:lastName 
        }
      }
    ]
  }
  const jsonData= JSON.stringify(data);
  const url= "https://us9.api.mailchimp.com/3.0/lists/730a8934de";
  const Options = {
    method:"POST",
    auth:"Simo:1d89566692ac3495afbce9e79881f804-us9"
  }
  const requestt = https.request(url,Options,function (respon) {
    if (respon.statusCode === 200) {
      resp.sendFile( __dirname+"/success.html")
    } else {
      resp.sendFile(__dirname+"/failure.html")
    }
  });
  requestt.write(jsonData);
  requestt.end();
   
});

app.post("/failure.html" , function (req,res) {
  res.redirect("/");
})

// 1d89566692ac3495afbce9e79881f804-us9

// 730a8934de


app.listen("3000",function () {
  console.log("hello");
})