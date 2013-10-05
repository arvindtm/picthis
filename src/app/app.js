angular.module( 'picThis', [
  'templates-app',
  'templates-common',
  'picThis.home',
  'picThis.about',
  'picThis.misc',
  'ui.state',
  'ui.route'
])



.config( function myAppConfig ( $stateProvider, $urlRouterProvider,$locationProvider ) {
  $urlRouterProvider.otherwise( '/home' );
  $locationProvider.html5Mode(true);
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | Picthis' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})
;

