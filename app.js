const request=require('request');
const axios=require('axios');
const yargs=require('yargs');


const argv= yargs.argv

console.log(argv);

request({
    url:`http://api.openweathermap.org/data/2.5/weather?appid=5fd5e9f589b704c2197465649c3c6e93&q=${argv.city}`,
    json:true
    }, function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); 
    console.log('body: ',body);

    if(error){
        console.log('Unable to connect to openWeatherMap server');
    }
    elseif(body.cod==='404'){
        console.log('city not found!');
    }
    else if(body.cod===200){
        console.log(`latitude: ${body.coord.lat}`);
        console.log(`longitude: ${body.coord.lon}`);
        console.log(`temprature: ${body.main.temp}K`);
        console.log(`weather: ${body.weather[0].main}`);
    }
});
