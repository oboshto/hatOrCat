'use strict';

var hatOrCat = function () {
    var startButton = document.getElementById('start');
    var start = function start() {
        console.info('Starting...');
    };
    return {
        start: start
    };
}();