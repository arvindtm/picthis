angular.module( 'picThis', [
  'templates-app',
  'templates-common',
  'picThis.home',
  'picThis.about',
  'picThis.pics',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | Picthis' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;

