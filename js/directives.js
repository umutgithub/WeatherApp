/**
 * Created by Matt on 1/17/2015.
 */
//now create custom directive to get the data in panels. which was repeat in ng repeat loop
//DIRECTIVES
weatherApp.directive('weatherReport', function(){
    return{
        restrict:'E'   ,
        templateUrl: "Directives/weatherReport.html",
        replace: true,
        scope: {
            weatherDay : "=",
            convertTempFunc: "&",
            convertDayFunc: "&",
            dateFormat:"@"
        }


    }

});

