(function() {
    'use strict';

    angular
        .module('hogwarts')
        .config(['$routeProvider', routeConfig]);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController'
            })
            .otherwise({redirectTo: '/'});
    }

})();
