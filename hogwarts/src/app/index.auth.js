(function() {
    'use strict';

    angular
        .module('hogwarts')
        .factory('authInterceptor', ['$q', 'Auth', authInterceptor])
        .factory('errorInterceptor', ['$rootScope', '$q', errorInterceptor]);


    /** @ngInject */
    function authInterceptor($q, Auth) {
        return {
            request: function (config) {
                if (Auth.token) {
                    var deferred = $q.defer();
                    Auth.updateToken(5).success(function() {
                        config.headers = config.headers || {};
                        config.headers.Authorization = 'Bearer ' + Auth.token;

                        deferred.resolve(config);
                    }).error(function() {
                        location.reload();
                    });
                    return deferred.promise;
                } else {
                    return config;
                }
            }
        };
    }


    /** @ngInject */
    function errorInterceptor($rootScope, $q) {
        return {
            responseError: function(response) {
                if (!response.config.ignoreAuthModule) {
                    switch (response.status) {
                        case 0: // cors issue
                        case 401:
                            var deferred = $q.defer();
                            $rootScope.$broadcast('event:auth-loginRequired', response);
                            return deferred.promise;
                        case 403:
                            $rootScope.$broadcast('event:auth-forbidden', response);
                            break;
                    }
                }
                return $q.reject(response);
            }
        };
    }

})();
