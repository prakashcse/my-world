angular.module('todo').controller("create.ctrl", function($scope,$http,hexafy) {
$scope.data =  [
    {
      name: "Tom Cruise",
      age: 56,
      Born: "Syracuse",
      Birthdate: "July 3, 1962",
      photo: "https://jsonformatter.org/img/tom-cruise.jpg"
    },
    {
      name: "Robert Downey Jr.",
      age: 53,
      Born: "Washington",
      Birthdate: "April 4, 1965",
      photo: "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
    },
    {
      name: "Andrew",
      age: 45,
      Born: "New York",
      Birthdate: "July 3, 1962",
      photo: "https://jsonformatter.org/img/tom-cruise.jpg"
    },
    {
      name: "Sunil",
      age: 39,
      Born: "Canada",
      Birthdate: "April 4, 1965",
      photo: "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
    }
  ];

  $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
  
  $scope.add = function(){
    return $scope.data.push(hexafy.getData());
  }

  $scope.delete = function(i){
     $scope.data.splice(i,1);
  }
});