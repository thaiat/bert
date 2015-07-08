'use strict';

module.exports = function(app) {
    // inject:start
    require('./parseService')(app);
    // inject:end
};