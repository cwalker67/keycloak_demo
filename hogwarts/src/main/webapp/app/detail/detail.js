'use strict';

angular.module('myApp.detail', ['ngRoute', 'myApp.spellService', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/edit/:spellId', {
        templateUrl: 'detail/detail.html',
        controller: 'EditSpellCtrl'
    })
    .when('/new', {
        templateUrl: 'detail/detail.html',
        controller: 'NewSpellCtrl'
    });
}])

.controller('EditSpellCtrl', ['$scope', '$routeParams', 'SpellData', function($scope, $routeParams, SpellData) {
    function getSpell() {
      SpellData.spell($routeParams.spellId)
        .then(function (result) {
          $scope.spellMaster = result.data;
          $scope.reset();
        });
    };

    function getSpellTypes() {
      SpellData.spellTypes()
        .then(function (result) {
          $scope.spellTypes = result.data;
        });        
    }

    $scope.alerts = [];
    
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
    

    $scope.spellMaster = [];
    $scope.spell = [];
    getSpell();


    $scope.spellTypes = [];
    getSpellTypes();

    $scope.reset = function() {
        $scope.spell = angular.copy($scope.spellMaster);
    };

    $scope.save = function() {
        SpellData.update($scope.spell).
            then(function(response) {
                console.log(response)
                $scope.alerts.push({type: 'success', msg: $scope.spell.name + ' successfully updated'});
        }, function(response) {
                console.log(response)
                $scope.alerts.push({type: 'danger', msg: $scope.spell.name + ' update failed'});
        });
    };
}])

.controller('NewSpellCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.keycloak =  Auth;
}]);