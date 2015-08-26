(function() {
    'use strict';

    angular
        .module('hogwarts', [
            'ngAnimate', 
            //'ngSanitize', 
            'ngRoute', 
            'toastr',
            'ui.bootstrap',
            'hogwarts.user',
            'hogwarts.spells',
            'hogwarts.detail',
            'hogwarts.spellService'
        ]);

})();
