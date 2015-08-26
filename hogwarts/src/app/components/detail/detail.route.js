(function() {
    'use strict';

    angular
        .module('hogwarts.detail')
        .config(['$routeProvider',config]);


    /** @ngInject */
    function config($routeProvider) {
        $routeProvider
            .when('/edit/:spellId', {
                templateUrl: 'app/components/detail/detail.html',
                controller: 'EditSpellCtrl'
            })
            .when('/new', {
                templateUrl: 'app/components/detail/detail.html',
                controller: 'NewSpellCtrl'
            });
    }
})();

