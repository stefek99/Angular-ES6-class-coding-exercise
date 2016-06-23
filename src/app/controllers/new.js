class NewCtrl {

  constructor($scope) {

    this.data = {
      date: new Date(),
      distance: 5.5,
      time: "12:12"
    };

    this.addEntry = () => {
      console.log("adding stuff");
    }
  }

}

export default NewCtrl;