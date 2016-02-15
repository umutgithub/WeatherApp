/**
 * Created by Matt on 1/17/2016.
 */
weatherApp.config(function($routeProvider){

    $routeProvider

        .when('/' ,{
            templateUrl:"pages/home.html",
            controller: "homeController"
        })

        .when('/forecast',{
            templateUrl: "pages/forecast.html",
            controller: "forecastController"
        })
        //past number of days at url
        .when('/forecast/:days',{
            templateUrl: "pages/forecast.html",
            controller: "forecastController"
        })
});
