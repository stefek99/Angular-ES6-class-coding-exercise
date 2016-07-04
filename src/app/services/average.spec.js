import app from './../app';

describe('average service', () => {

  var average;
  
  beforeEach(() => {
    angular.mock.module('app');

    angular.mock.inject(function(_average_) {
      average = _average_;
    });
  });

  it('should calculate average for a single entry', () => {

    var entries =  [
                     {
                       "distance": 5.5,
                       "time": -2209074600000,
                     }
                   ];

    var result = average.get(entries);
    expect(result).toEqual({
      speed : "33 km/h",
      distance : 5.5
    });
  });

});