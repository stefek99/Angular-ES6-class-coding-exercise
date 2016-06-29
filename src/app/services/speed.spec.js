import app from './../app';

describe('speed', () => {

  var speed;
  
  beforeEach(() => {
    angular.mock.module('app');

    angular.mock.inject(function(_speed_) {
      speed = _speed_;
    });
  });

  it('should work', () => {

    var result = speed.get("a", "b");
    expect(result).toBe("a b");
  });

});