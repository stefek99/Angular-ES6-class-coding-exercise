class HomeCtrl {
  constructor(service) {
    this.url = 'https://github.com/preboot/angular-webpack';

    this.method = () => {
      console.log("method");
    }

    this.ser = () => {
      console.log( service.add(17) );
    }
  }
}

export default HomeCtrl;