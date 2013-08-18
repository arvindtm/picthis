angular.module( 'picThis.pics', [
  'ui.state',
  'placeholders',
  'ui.bootstrap',
  'titleService',
  'picService'
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


.controller ('picParamListCtrl', function picParamListCtrl($scope, picsFactory) {
  $scope.picParams = picsFactory.query();
})


.controller ('picsDetailCtrl', function picsDetailCtrl($scope, picsFactory) {
  $scope.picParams = picsFactory.query();
})

/*

.controller ('CarouselDemoCtrl' function CarouselDemoCtrl($scope, picsFactory) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/200',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
}

*/

;


