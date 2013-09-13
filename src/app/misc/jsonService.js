/*
angular.module( 'plusOne','picService' [] )

.directive( 'plusOne', function() {
  return {
    link: function( scope, element, attrs ) {
      gapi.plusone.render( element[0], {
        "size": "medium",
        "href": "http://bit.ly/ngBoilerplate"
      });
    }
  };
})

;

*/


angular.module('jsonService', ['ngResource'])
.factory('jsonServiceFactory', function($resource) {
  return $resource('assets/data.json',{},{
  'getData':  {method:'GET', isArray:true}
  }
  );
});

