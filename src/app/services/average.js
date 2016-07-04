// Report on average speed & distance per week
let average = () => {
  return {
    get : (entries) => {
      return {
        speed : "33 km/h",
        distance : 5.5
      };
    }
  };
};

export default average;