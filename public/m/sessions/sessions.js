
angular.module('sessions', ['ngRoute'])

.run(function ($rootScope, $location, $http) {
	$http.get('/token')
		.success(function (user, status) {
		if (user) {
			$rootScope.user = user;
		}
    else {
			// user not found, ask to login
    }
	});
})

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

	.when('/sessions/:id', {
		templateUrl: '/public/m/sessions/sessions.html',
		controller: 'sessionsCtrl'
	})

	.when('/agenda', {
		templateUrl: '/public/m/dummy.html',
		controller: 'agendaCtrl'
	})

	.when('/sessions/:id/details', {
		templateUrl: '/public/m/sessions/session.html',
		controller: 'sessionCtrl'
	})

	.when('/sessionDetails', {
		templateUrl: '/public/m/sessions/sessionDetails.html',
		controller: 'sessionDetailsCtrl'
	})


}]);
