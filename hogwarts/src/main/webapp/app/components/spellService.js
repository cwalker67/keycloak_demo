'use strict';

angular.module('myApp.spellService', [])

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

    service.spell = function(spellId) {
        return $http.get(getUrl()+ '/' + spellId);
    }

    service.spellTypes = function() {
        return $http.get(getUrl() + '/type');
    }

    service.update = function(spell) {
        return $http.post(getUrl() + '/' + spell.spellId, spell);
    }
}]);
