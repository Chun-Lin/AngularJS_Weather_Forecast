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