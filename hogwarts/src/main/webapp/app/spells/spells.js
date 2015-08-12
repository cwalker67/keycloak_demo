'use strict';

angular.module('myApp.spells', ['ngRoute', 'myApp.spellService'])

.controller('SpellCtrl', ['SpellData', 'Auth', '$scope', function(SpellData, Auth, $scope) {

    function getSpells() {
      SpellData.all()
        .then(function (result) {
          $scope.spells = result.data;
        });
    }

    $scope.spells = [];
    getSpells();    

    $scope.affinityClass = function(spell) {
        if (spell.spellAffinity == 'DARK') {
            return 'danger';
        } else if (spell.spellAffinity == 'LIGHT') {
            return 'success';
        } else {
            return 'info';
        }
    };

    $scope.isCreator = function() {
        return Auth.hasRealmRole('Spell Creators');
    };

}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spells', {
    templateUrl: 'spells/spells.html',
    controller: 'SpellCtrl'
  });
}])



