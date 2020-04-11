angular.module('todo')
.controller('User.ctrl', function($scope,todoService) {
  $scope.formData = {};
  $scope.save = function(){
    console.log($scope.formData);
    todoService.http.get('https://jsonplaceholder.typicode.com/users').then(function(resp){
        console.log("resp=>",resp.data)
    })
  }
});