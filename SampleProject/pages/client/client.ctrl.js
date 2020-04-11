angular.module('todo')
.controller('Client.ctrl', function($scope,todoService) {
  todoService.http.get('https://jsonplaceholder.typicode.com/users').then(function(resp){
        $scope.data = resp.data;
    })
});