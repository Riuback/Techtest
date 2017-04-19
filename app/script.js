
	var scotchApp = angular.module('scotchApp', ['ngRoute']  );


	scotchApp.config(function($routeProvider) {
		$routeProvider

		
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			
			.when('/Foo', {
				templateUrl : 'pages/Foo.html',
				controller  : 'mainController'
			})
			
			.when('/Bar', {
				templateUrl : 'pages/Bar.html',
				controller  : 'mainController'
			})

			
			.when('/Sinclair', {
				templateUrl : 'pages/Sinclair.html',
				controller  : 'SinclairController'
			})
			.when('/Commodore', {
				templateUrl : 'pages/Commodore.html',
				controller  : 'CommodoreControler'
			})

			
			.when('/Amstrad', {
				templateUrl : 'pages/Amstrad.html',
				controller  : 'AmstradController'
			});
	});

	
	
	

	scotchApp.controller('mainController', function($scope, $http) {
		
			$http.get('json/vintage-brands.json').success(function (data) {
			$scope.datos = data;
			});
			
	
			
			$http.get('json/vintage-items.json').success(function (data) {
			$scope.items = data;
			});
		
		
	});
	
	scotchApp.controller('SinclairController', function($scope, $http) {
		
	
	
		$scope.rowCollection=[];
		for(var i=0; i<$scope.items.length; i++){
			if($scope.items[i].idbrand==1){
				$scope.rowCollection.push($scope.items[i]);
			}
		}
		
		
	
	
	
	
	});
	

	scotchApp.controller('CommodoreControler', function($scope, $http) {
		
		$scope.rowCollection=[];
		for(var i=0; i<$scope.items.length; i++){
			if($scope.items[i].idbrand==2){
				$scope.rowCollection.push($scope.items[i]);
			}
		}
		
		
		
		
		

	});
	
	scotchApp.controller('AmstradController', function($scope) {
		
		
	 $scope.rowCollection=[];
		for(var i=0; i<$scope.items.length; i++){
			if($scope.items[i].idbrand==3){
				$scope.rowCollection.push($scope.items[i]);
			}
		}
	
	
	
	

	});
	
	
	//Directiva para favorito.
	
	
	scotchApp.directive('csSelect', function () {
    return {
        require: '^stTable',
        template: '  <input type="checkbox"/> <span class="glyphicon glyphicon-star" aria-hidden="false"></span> ',
        scope: {
            row: '=csSelect'
        },
       
    };
});
	

	