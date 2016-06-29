import app from './../app';

describe('speed service', () => {

  var speed;
  
  beforeEach(() => {
    angular.mock.module('app');

    angular.mock.inject(function(_speed_) {
      speed = _speed_;
    });
  });

  it('should calculate 10km 10minutes', () => {
    var result = speed.get(10, new Date(0,0,0,0,10,0));
    expect(result).toBe("60 km/h");
  });  

  it('should round 3km 2hours to 1.50', () => {
    var result = speed.get(3, new Date(0,0,0,2,0,0));
    expect(result).toBe("1.50 km/h");
  });

});