angular.module( 'picThis.pics', [
  'ui.state',
  'placeholders',
  'ui.bootstrap',
  'titleService',
  'picService',
  'jsonService'
])

.config(function myAppConfig ( $stateProvider, $routeProvider ) {
  
  $stateProvider.state( 'pics', {
    url: '/pics',
    views: {
      "main": {
        controller: 'picParamListCtrl',
        templateUrl: 'pics/pics.tpl.html'
      }
	}
});
	
   $stateProvider.state( 'pics/:id', {
    url: '/pics/:id',
    views: {
      "main": {
        controller: 'picsDetailCtrl',
        templateUrl: 'pics/pics-detail.tpl.html'
      }
	} 
	});
	
  $routeProvider.
	when('/pics',{
		templateUrl: 'pics/pics.tpl.html',   
		controller: 'picParamListCtrl'}).
    when('/pics/:id', {
		templateUrl: 'pics/pics-detail.tpl.html', 
		controller: 'picsDetailCtrl'}).
    otherwise( '/pics' );
	}
)


.controller ('picParamListCtrl', function ($scope, picsFactory) {
  picsFactory.get(function(picturedata){
  $scope.picParamsname = picturedata.name;
  $scope.picParamscolor = picturedata.color;
 });

})


.controller ('picsDetailCtrl', function ($scope, picsFactory) {
  picsFactory.get(function(picturedata){
  $scope.picDetailParamsname = picsFactory.name;
});
})
;

