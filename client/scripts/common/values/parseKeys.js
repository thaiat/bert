'use strict';
var valuename = 'parseKeys';

module.exports = function(app) {
    app.value(app.name + '.' + valuename, {});
};