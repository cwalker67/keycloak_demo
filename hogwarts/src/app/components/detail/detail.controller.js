(function() {
    'use strict';

    angular
        .module('hogwarts.detail')

        .controller('EditSpellCtrl', ['$scope', '$routeParams', 'SpellData', 'toastr', EditSpellCtrl])
        .controller('NewSpellCtrl', ['$scope', 'Auth', NewSpellCtrl]);

    /** @ngInject */
    function NewSpellCtrl($scope, Auth) {
        $scope.keycloak =  Auth;
    }

    /** @ngInject */
    function EditSpellCtrl($scope, $routeParams, SpellData, toastr) {
        function getSpell() {
          SpellData.spell($routeParams.spellId)
            .then(function (result) {
              $scope.spellMaster = result.data;
              $scope.reset();
            });
        }

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
                then(function() {
                    toastr.success($scope.spell.name + ' successfully updated', 'Success');
            }, function() {
                    toastr.error($scope.spell.name + ' update failed', 'Error' );
            });
        };
    }

})();




