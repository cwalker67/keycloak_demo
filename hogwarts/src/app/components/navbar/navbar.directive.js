(function() {
  'use strict';

  angular
    .module('hogwarts')
    .directive('hogwartsNavbar', hogwartsNavbar);

  /** @ngInject */
  function hogwartsNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: ['Auth', '$scope', NavbarController],
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(Auth, $scope) {
      $scope.logout = Auth.logout;
    }
  }

})();
