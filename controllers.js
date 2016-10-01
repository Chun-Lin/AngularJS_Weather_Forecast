//Controllers
weatherApp.controller('HomeController', ['$scope','$location','cityService', function ($scope, $location, cityService) {
	$scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path("/forecast");
    };
    
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