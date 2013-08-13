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

angular.module('picService', ['ngResource'])
.factory('picsFactory', 
function($resource){
  return $resource('assets/pictures.json', {}, {
    query: {
	method:'GET', 
	params:{id:'picParams'}, 
	isArray:true
	}
  });
});

// angular.module('picThis', ['picService']);