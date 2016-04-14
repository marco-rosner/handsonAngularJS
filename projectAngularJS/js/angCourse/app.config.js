angular
	.module('app')
	.config(config);

function config($routeProvider){
	$routeProvider
		.when('/',{
            templateUrl: 'list.html',
            controller: 'BillController',
            controllerAs: 'billCtrl'
        })
        .when('/edit/:id',{
            templateUrl: 'form.html',
            controller: 'BillController',
            controllerAs: 'billCtrl'
        })
        .when('/new',{
            templateUrl: 'form.html',
            controller: 'BillController',
            controllerAs: 'billCtrl'
        })
        .otherwise({redirectTo:'/'});
}