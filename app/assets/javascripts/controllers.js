var indexCtrl = calculator.controller('indexCtrl', function($scope){
  $scope.a_number = '';
  $scope.result = [];
  $scope.input1 = function() {
    $scope.a_number = $scope.a_number.concat(1);
  };
  $scope.input2 = function() {
   $scope.a_number = $scope.a_number.concat(2);
  };
  $scope.input3 = function() {
   $scope.a_number = $scope.a_number.concat(3);
  };
  $scope.input4 = function() {
   $scope.a_number = $scope.a_number.concat(4);
  };
  $scope.input5 = function() {
   $scope.a_number = $scope.a_number.concat(5);
  };
  $scope.input6 = function() {
   $scope.a_number = $scope.a_number.concat(6);
  };
  $scope.input7 = function() {
   $scope.a_number = $scope.a_number.concat(7);
  };
  $scope.input8 = function() {
   $scope.a_number = $scope.a_number.concat(8);
  };
  $scope.input9 = function() {
   $scope.a_number = $scope.a_number.concat(9);
  };
  $scope.input0 = function() {
    $scope.a_number = $scope.a_number.concat(0);
  };
  $scope.clear = function() {
    $scope.a_number = '';
  };
  $scope.add = function() {
    $scope.result.push($scope.a_number);
    $scope.a_number = '';
  };
  $scope.subtract = function() {
    $scope.result.push($scope.a_number);
    $scope.a_number = '-';
    console.log('hello')
  };
  $scope.equal = function() {
    $scope.result.push($scope.a_number);
    $scope.result = $scope.result.map(Number);
    $scope.a_number = _.reduce($scope.result, function(memo, num){return memo + num; });
    $scope.result = [];
  };
});