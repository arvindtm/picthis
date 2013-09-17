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
    when('/misc/:id', {
		templateUrl: 'misc/misc-detail.tpl.html', 
		controller: 'miscDetailCtrl'}).
    otherwise( '/misc' );
	}
)

.controller ('miscParamListCtrl', function($scope, jsonServiceFactory) {
  
  jsonServiceFactory.getData(function(data){
  
  //$scope.id = data[1].id;
  for (i=0;i<=20;i++)
  {
  $scope.miscParamsname.id = data[i].name;
  $scope.miscParamsaddress.id = data[i].address;
  }
 });
})

.controller('miscDetailCtrl', function($scope, jsonServiceFactory) {
  jsonServiceFactory.getData(function(data){
    $scope.name = data.name;
    $scope.children = data.children;
  });
})
;

