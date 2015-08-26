(function() {
    'use strict';

    angular
        .module('hogwarts.spells')
        .config(['$routeProvider',config]);


    /** @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/spells', {
            templateUrl: 'app/components/spells/spells.html',
            controller: 'SpellCtrl'
        });
    }

})();


