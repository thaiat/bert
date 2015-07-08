'use strict';

module.exports = function(app) {
    // inject:start
    require('./communityFeed')(app);
    require('./dashboard')(app);
    require('./userFeed')(app);
    require('./userProfile')(app);
    // inject:end
};