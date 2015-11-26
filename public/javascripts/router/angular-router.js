app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'authController'
		})
		//the signup display
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'authController'
		})
		.when('/chrip', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/team', {
			templateUrl: 'views/team.html',
			controller: 'siteController'
		})
		.when('/standardisation', {
			templateUrl: 'views/standardisation.html',
			controller: 'siteController'
		})
		.when('/oee', {
			templateUrl: 'views/oee.html',
			controller: 'siteController'
		})
		.when('/business-intelligence', {
			templateUrl: 'views/business-intelligence.html',
			controller: 'siteController'
		})
		.when('/project-improvement', {
			templateUrl: 'views/project-improvement.html',
			controller: 'siteController'
		})
		.when('/change-management', {
			templateUrl: 'views/change-management.html',
			controller: 'siteController'
		})
		.when('/suez-app', {
			templateUrl: 'views/suez-app.html',
			controller: 'siteController'
		})
		.when('/vision', {
			templateUrl: 'views/vision.html',
			controller: 'siteController'
		})
		.when('/photos', {
	        templateUrl: 'partials/photo-list.html',
	        resolve: {
	          photoList: function($q, $rootScope, album) {
	            if (!$rootScope.serviceCalled) {
	              return album.photos({}, function(v){
	                $rootScope.serviceCalled = true;
	                $rootScope.photos = v.resources;
	              });
	            } else {
	              return $q.when(true);
	            }
	          }
	        }
	    })
	    .when('/photos/new', {
	        templateUrl: 'partials/photo-upload.html',
	        controller: 'photoUploadCtrl'
	    })
	    .when('/:id', {
			templateUrl: 'views/profil/index.html',
			controller: 'profilController'
		})
		.when('/:id/edit', {
			templateUrl: 'views/profil/edit.html',
			controller: 'profilEditController'
		})
		.when('/:id/edit/profilpic', {
			templateUrl: 'views/profil/editprofilpic.html',
			controller: 'profilPicUploadController'
		});
});