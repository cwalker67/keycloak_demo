(function() {
  'use strict';

  angular
    .module('hogwarts.user')

    .controller('UserCtrl', [ '$rootScope','$scope', 'Auth', UserCtrl]);


    /** @ngInject */
    function UserCtrl($rootScope, $scope, Auth) {
        if (!Auth.authenticated) {
            $rootScope.$broadcast('event:auth-loginRequired');
        }
        $scope.keycloak =  Auth;
    }

})();
