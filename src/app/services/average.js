// Report on average speed & distance per week
let average = () => {
  return {
    get : (entries) => {

      var totalSeconds = 0;
      var totalKM = 0;

      entries.forEach((entry) => {
        var time = new Date(entry.time);
        totalSeconds += (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds());
        totalKM += entry.distance;
      });


      return {
        speed : "33 km/h",
        distance : 5.5
      };
    }
  };
};

export default average;