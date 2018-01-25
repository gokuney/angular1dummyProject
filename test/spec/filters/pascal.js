'use strict';

describe('Filter: pascal', function () {

  // load the filter's module
  beforeEach(module('ngGautamApp'));

  // initialize a new instance of the filter before each test
  var pascal;
  beforeEach(inject(function ($filter) {
    pascal = $filter('pascal');
  }));

  it('should return the input prefixed with "pascal filter:"', function () {
    var text = 'angularjs';
    expect(pascal(text)).toBe('pascal filter: ' + text);
  });

});
