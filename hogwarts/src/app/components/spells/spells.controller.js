(function() {
    'use strict';

    angular
        .module('hogwarts.spells')

        .controller('SpellCtrl', [ 'SpellData', 'Auth', '$scope', SpellCtrl]);


    /** @ngInject */
    function SpellCtrl(SpellData, Auth, $scope) {
        function getSpells() {
            SpellData.all().then(function (result) {
                $scope.spells = result.data;
            });
        }

        $scope.spells = [];
        getSpells();    

        $scope.affinityClass = function(spell) {
            if (spell.spellAffinity === 'DARK') {
                return 'danger';
            } else if (spell.spellAffinity === 'LIGHT') {
                return 'success';
            } else {
                return 'info';
            }
        };

        $scope.isCreator = function() {
            return Auth.hasRealmRole('Spell Creators');
        };
    }

})();
