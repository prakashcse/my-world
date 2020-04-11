angular.module('todo').controller("view.ctrl", function($scope,$http,hexafy) {
  console.log($scope.add);

  $http.get("https://www.w3schools.com/angular/customers.php").then(function(response)
  {
      $scope.myData = response.data.records;
  });

  
  $scope.deleteMyData = function(i){
    $scope.myData.splice(i,1);
 }
  });