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
         $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a0be02eb7e1ad8c86374d21ee734d432",
        {callback:"JSON_CALLBACK"},{get: {method: "JSONP"}});

    return weatherAPI.get({ q:city, cnt:days });
    }

}]);