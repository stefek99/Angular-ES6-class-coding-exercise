let speed = () => {
  return {
    get : (distance, time) => {
      return "" + distance + " " + time;
    }
  };
};

export default speed;