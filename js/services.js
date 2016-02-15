/**
 * Created by Matt on 1/17/2016.
 */
//custom service. service i controller a pas yap.
weatherApp.service('cityService' ,function() {
    this.city = "New York, NY";

} );

weatherApp.service('weatherService' , ['$resource', '$http', function($resource, $http){
    this.GetWeather = function (city, day) {
        var url = "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=a0be02eb7e1ad8c86374d21ee734d432";

       // var weatherAPI = $resource(url, {callback:"JSON_CALLBACK"},{get: {method: "JSONP"}});
       // console.log("WEATHER API",weatherAPI);


        /*var weatherAPI_HTTP = $http.jsonp(url, {
            params: {
                q: city,
                cnt: days,
                format: 'json',
                callback: 'JSON_CALLBACK'
            }
        }).success(function (data) {
            console.log(data);
            return data;
        }).error(function (data) {
            console.log(data);
        });*/

        /*  (function test(){
            $http.jsonp(url, {
                params: {
                    q: city,
                    cnt: days,
                    format: 'json',
                    callback: 'JSON_CALLBACK'
                }
            }).success(function (data) {
                console.log(data);
            }).error(function (data) {
                console.log(data);
            });

        }());*/

     var config = {params: {
         q: city,
         cnt: day,
         format: 'json',
         callback:"JSON_CALLBACK"
     }};


    return $http.jsonp(url, config);
   //$http.get(url, config); kullanmak icin config den callback param i cikar

    };




}]);