/**
 * Created by Matt on 1/17/2015.
 */
//custom service. service i controller a pas yap.
weatherApp.service('cityService' ,function() {
    this.city = "New York, NY";

} );

weatherApp.service('weatherService' , ['$resource', function($resource){
    this.GetWeather = function (city, days) {
         var weatherAPI =
         $resource("http://api.openweathermap.org/data/2.5/weather/forecast/daily?APPID=1633e3405e36e41dd5ee2fbc646fbef8",
        {callback:"JSON_CALLBACK"},{get: {method: "JSONP"}});

    return weatherAPI.get({ q:city, cnt:days });
    }

}]);