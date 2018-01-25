'use strict';

describe('Service: useractions', function () {

  // load the service's module
  beforeEach(module('ngGautamApp'));

  // instantiate service
  var useractions;
  beforeEach(inject(function (_useractions_) {
    useractions = _useractions_;
  }));

  it('should do something', function () {
    expect(!!useractions).toBe(true);
  });

});
