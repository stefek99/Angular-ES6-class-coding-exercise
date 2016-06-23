let LoginCtrl = ($scope, service, service2) => {

  $scope.message = "dupa";


  $scope.ser = () => {
    console.log( service.add(17) );
  }  

  $scope.ser2 = () => {
    console.log( service2.multiply(17) );
  }
}

export default LoginCtrl;