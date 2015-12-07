/**
 * Created by Matt on 1/17/2015.
 */
//controller for that 2 pages
weatherApp.controller('homeController',['$scope','$location', 'cityService',
    function($scope, $location, cityService){

        $scope.city = cityService.city;
        //watch city value if it changes by user.
        // If so cityService.city value msut be same with user input
        $scope.$watch('city' ,function(){    //city value sunu watch yap
            cityService.city =  $scope.city;
        //need $location service to pass this function to forecast.html page
        $scope.submit = function() {
           $location.path("/forecast");
        }

        });
        //console.log($scope);
    }]);


//resource u burda kullaniyo data yi almak forecast ten
weatherApp.controller('forecastController' ,['$scope', '$resource','$routeParams','cityService','weatherService',
    function($scope,$resource,$routeParams, cityService,weatherService){

        $scope.city = cityService.city;

        $scope.days = $routeParams.days || '2';


        $scope.weatherResult = weatherService.GetWeather({q:$scope.city, cnt:$scope.days});

        //console.log($scope.weatherResult);
        $scope.convertToFahrenheit= function (degK) {

            return Math.round((1.8*(degK - 273)) + 32);
        }
        //date convert returning date format from the APi long numbers
        $scope.convertToDate = function(dt) {
            return new Date(dt *1000);
        }

    }]);