angular.module( 'picThis.pics', [
  'ui.state',
  'placeholders',
  'ui.bootstrap',
  'titleService',
  'picService'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'pics', {
    url: '/pics',
    views: {
      "main": {
        controller: 'picParamListCtrl',
        templateUrl: 'pics/pics.tpl.html'
      }
    }
  });
})

.controller ('picParamListCtrl', function picParamListCtrl($scope, picsFactory) {
  $scope.picParams = picsFactory.query();
})
;
/*
.controller( 'picCtrl', function picCtrl( $scope, titleService, picsFactory ) {
  
  titleService.setTitle( 'Pictures' );
  
  $scope.picParams = picsFactory.query();
  
  //$scope.picList = picsFactory.query();
  //$scope.picName = picList.name; 
  //$scope.picColor = picList.color;
   
     
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
  
  
})

;
*/
