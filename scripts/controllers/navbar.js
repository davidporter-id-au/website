'use strict';

angular.module('davidporteridauApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
	{
	'title': 'Home',
	'link': '/'
	},
	{
	'title': 'Contact',
	'link': '/contact'
	},
	{
	'title': 'Skills & CV',
	'link': '/skills'
	},
	{
	'title': 'Github',
	'link': 'https://github.com/DesertLynx'
	},
  ];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
