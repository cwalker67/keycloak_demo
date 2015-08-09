'use strict';

angular.module('myApp.spells', ['ngRoute'])

.controller('SpellCtrl', ['SpellData', '$scope', function(SpellData, $scope) {

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
    }
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spells', {
    templateUrl: 'spells/spells.html',
    controller: 'SpellCtrl'
  });
}])

.constant('ENDPOINT_URI', 'http://172.16.0.100:9080/spellbook/')


.service('SpellData', [ '$http', 'ENDPOINT_URI', function($http, ENDPOINT_URI) {
    var service = this;

    var path = 'spell';

    function getUrl() {
        return ENDPOINT_URI + path;
    };

    service.all = function() {
        return $http.get(getUrl());
    };
}]);