(function() {
  'use strict';

  angular
    .module('hogwarts.spellService', [])

    .constant('ENDPOINT_URI', 'https://172.16.0.100/spellbook/')

    .service('SpellData', [ '$http', 'ENDPOINT_URI', SpellData]);


    /** @ngInject */
    function SpellData($http, ENDPOINT_URI) {
        var service = this;

        var path = 'spell';

        function getUrl() {
            return ENDPOINT_URI + path;
        }

        service.all = function() {
            return $http.get(getUrl());
        };

        service.spell = function(spellId) {
            return $http.get(getUrl()+ '/' + spellId);
        };

        service.spellTypes = function() {
            return $http.get(getUrl() + '/type');
        };

        service.update = function(spell) {
            return $http.post(getUrl() + '/' + spell.spellId, spell);
        };
    }
})();

