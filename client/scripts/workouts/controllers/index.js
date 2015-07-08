'use strict';

module.exports = function(app) {
    // inject:start
    require('./datafeed')(app);
    require('./workouts')(app);
    // inject:end
};