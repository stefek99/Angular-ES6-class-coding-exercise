let service2 = (service) => {
  return {
    multiply : function(number) {
      var result = service.add(34);

      console.log(result);

      return 2 * number;
    }
  }
};

export default service2;