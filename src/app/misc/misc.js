angular.module( 'picThis.misc', [
  'ui.state',
  'placeholders',
  'ui.bootstrap',
  'titleService',
  'jsonService'
])

.config(function myMiscConfig ( $stateProvider, $routeProvider ) {
  
  $stateProvider.state( 'misc', {
    url: '/misc',
    views: {
      "main": {
        controller: 'miscParamListCtrl',
        templateUrl: 'misc/misc.tpl.html'
      }
	}
});
	
   $stateProvider.state( 'misc/:id', {
    url: '/misc/:name',
    views: {
      "main": {
        controller: 'miscDetailCtrl',
        templateUrl: 'misc/misc-detail.tpl.html'
      }
	} 
	});
	
  $routeProvider.
	when('/misc',{
		templateUrl: 'misc/misc.tpl.html',   
		controller: 'miscParamListCtrl'}).
    when('/misc/:posts.id', {
		templateUrl: 'misc/misc-detail.tpl.html', 
		controller: 'miscDetailCtrl'}).
    otherwise( '/misc' );
	}
)


.controller ('miscParamListCtrl', function($scope, jsonServiceFactory) {
  
  jsonServiceFactory.getData(function(data){
  $scope.posts = data;   
 });
})


.controller('miscDetailCtrl', function($scope, jsonServiceFactory) {
  jsonServiceFactory.getData(function(data){
    $scope.posts = data;   
  });
})
;

