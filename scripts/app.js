'use strict';

angular.module('davidporteridauApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute'
		])
.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main',
	controller: 'MainCtrl'
	})
	.when('/contact', {
		templateUrl: 'partials/contact',
	controller: 'ContactCtrl'
	})
	.when('/skills', {
		templateUrl: 'partials/skills',
	controller: 'SkillsCtrl'
	})
	.when('/ca', {
		templateUrl: 'partials/ca-only',
	controller: 'CaCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});


