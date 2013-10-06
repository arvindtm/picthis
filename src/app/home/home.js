/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 */
angular.module( 'picThis.home', [
  'ui.state',
  'titleService',
  'plusOne',
  'placeholders',
  'ui.bootstrap',
  'picService',
  'jsonService'
  ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */

.config(function myAppConfig ( $stateProvider) {
  
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    }
  });
 

  $stateProvider.state( 'home/:id', {
    url: '/home/:id',
    views: {
      "main": {
        controller: 'picCtrl',
        templateUrl: 'home/pics-detail.tpl.html'
      }
	} 
	});

	}
	)
/**
 * And of course we define a controller for our route.
 */
.controller('HomeCtrl', function HomeController( $scope,titleService, picsFactory ) {
  titleService.setTitle( 'Home' );
  picsFactory.getData(function(picturedata){
  $scope.picParams = picturedata;
  
  });
})


.controller('picCtrl', function picController( $scope, $stateParams, titleService,picsFactory ) {
  titleService.setTitle( 'Pics' );
   picsFactory.getData(function(picturedata){
  $scope.picture = picturedata[$stateParams.id];
   });
  
})
;

