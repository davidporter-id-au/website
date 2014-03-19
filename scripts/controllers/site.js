'use strict';
//{{{ controllers
angular.module('davidporteridauApp')
  .controller('ContactCtrl', function ($scope, $http) {

	$scope.submit = function() {
		$scope.response = 'Thank you for sending me that message, I\'ll get back to you ASAP.';
	};
  });

var app = angular.module('davidporteridauApp');

app.controller('SkillsCtrl', function ($scope, $http, $location, $anchorScroll) {

	$scope.linkTo = function(id) {
		$location.hash(id); 
		$anchorScroll();
	};
	
	$scope.submit = function() {
		$scope.response = 'Thank you for sending me that message, I\'ll get back to you ASAP.';
	};
  });

app.controller('CaCtrl', function($scope){

	//Change the existing rules based upon the given key (eg '111').
	$scope.toggleRule = function(key) {
		setup();
		rules[key] = (rules[key]) == 1 ? 0 : 1;
		$scope.iterate();
	}

	$scope.rows = 50;
	$scope.columns = 100;

	var setup = function() {
		var arr = [];
		var rows = $scope.rows;
		var cols = $scope.columns;
		//for each row
		for(var i = 0; i < rows; i++) {
			arr[i] = [];

			//for each column
			for(var j = 0; j < cols; j++) {
				arr[i][j] = {row: i, col: j, value: false}; 
			}
		}

		//setup staring point
		arr[0][parseInt(cols/2)] = {row: i, col: j, value: true}; 
		return arr;
	};

	var calc = function(array, row, column){
		if(column > 1 && row > 0 && column < array[0].length -1) {
			var m = +array[row -1 ][column].value
			var l = +array[row -1 ][column - 1].value
			var r = +array[row -1 ][column + 1].value
			return "" + l + "" +  m + "" +  r;
		}
		else {
			//do nothing, out of range
		}
	};

	//The ruleset
	var rules = {
			'111': false,
			'110': false,
			'101': false,
			'100': true,
			'011': true,
			'010': true,
			'001': true,
			'000': false,
		};

	$scope.rules = rules;
	

	var iterate = function(arr) {
		//for each row
		for(var i = 0; i < arr.length ; i++) {
			//for each column
			for(var j = 0; j < arr[i].length; j++) {
				var result = rules["" + calc(arr, i, j)];
				if(result != undefined) 
					arr[i][j].value = !!result;
			}
		}
	}

	$scope.iterate = function() {
		$scope.ca = setup(); 
		iterate($scope.ca);
	};

})
//}}}
