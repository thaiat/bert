'use strict';
var angular = require('angular');
require('angular-mocks');
var app = require('./main-bert.js');

describe('app', function() {

    beforeEach(function() {
        angular.mock.module(app.name);
    });

    it('should be defined', function() {
        expect(app).toBeDefined();
    });

});