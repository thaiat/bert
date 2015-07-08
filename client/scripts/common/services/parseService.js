'use strict';
var servicename = 'parseService';

module.exports = function(app) {

    var dependencies = [];

    function service() {

    }

    service.$inject = dependencies;
    app.service(app.name + '.' + servicename, service);

};