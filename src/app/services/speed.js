let speed = () => {
  return {
    get : (distance, time) => { // Missing TYPESCRIPT already... (distance: number, time: Date)
      var seconds = time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
      var kmh = distance / (seconds / 3600);
      if (kmh === Math.round(kmh)) {
        return kmh + " km/h";
      } else {
        return kmh.toFixed(2) + " km/h";
      }
    }
  };
};

export default speed;