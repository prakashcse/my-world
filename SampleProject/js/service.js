angular.module('todo')
.service("hexafy", function() {
 this.getData = function(){
     return x = {
    name: "Stephen",
    age: 20,
    Born: "Austira",
    Birthdate: "Jan 23, 18947",
    photo: "https://jsonformatter.org/img/tom-cruise.jpg"
  };
}
 
}).service('todoService', function($http) {
  var vm = this;
  vm.http = $http;
  vm.data = {};
  return vm;
});