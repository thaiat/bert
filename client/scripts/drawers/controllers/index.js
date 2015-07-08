'use strict';

module.exports = function(app) {
    // inject:start
    require('./drawerProfile')(app);
    require('./leftDrawer')(app);
    // inject:end
};