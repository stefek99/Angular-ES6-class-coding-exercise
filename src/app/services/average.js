// Report on average speed & distance per week
let average = (speed) => {
  return {
    get : (entries) => {

      var totalSeconds = 0;
      var totalKM = 0;

      entries.forEach((entry) => {
        var time = new Date(entry.time);
        totalSeconds += (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds());
        totalKM += entry.distance;
      });

      if (totalKM === 0 || totalSeconds === 0) { // avoiding division by zero (anyway something weird has just happened)
        return {
          speed :  "N/A",
          distance : 0
        };
      } else {
        return {
          speed : speed.get(totalKM, new Date(0,0,0,0,0,totalSeconds)),
          distance : totalKM / entries.length
        };
      }

    }
  };
};

export default average;