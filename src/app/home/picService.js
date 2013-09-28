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
.factory('picsFactory',function($resource){
  return $resource('assets/pictures.json',{},{
  'getData':  {method:'GET', isArray:true}
  }
  );
});

// angular.module('picThis', ['picService']);

