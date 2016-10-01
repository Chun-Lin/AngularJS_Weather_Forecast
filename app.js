
// Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


// Routes
weatherApp.config(function ($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'pages/Home.html',
		controller: 'HomeController'
	})

	.when('/forecast/', {
		templateUrl: 'pages/Forecast.html',
		controller: 'ForecastController'
	})
    
    .when('/forecast/:days', {
		templateUrl: 'pages/Forecast.html',
		controller: 'ForecastController'
	})
});


//Services
weatherApp.service('cityService', function(){
    
    this.city = "London";
    this.appid = "4f2ea75c587207da09ebd577068d8d7d";

});


//Controllers
weatherApp.controller('HomeController', ['$scope','cityService', function ($scope, cityService) {
	$scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
    
}]);

weatherApp.controller('ForecastController', ['$scope','$resource','$routeParams','cityService', function ($scope, $resource, $routeParams, cityService){
    
    $scope.city = cityService.city;
    $scope.appid = cityService.appid;
    $scope.days = $routeParams.days || '7';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily");
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days,units: "metric", APPID: $scope.appid});
    
    console.log($scope.appid);
    
    console.log($scope.weatherResult);
    
    
    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    };
}]);



