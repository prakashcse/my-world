angular.module('todo')
.config(function($stateProvider,$urlRouterProvider,$locationProvider) {
  $urlRouterProvider.otherwise("/create");
  $locationProvider.html5Mode(true);

  $stateProvider.state({
    name: 'home',
    url: '/home',
    templateUrl: 'pages/home/home.html',
    controller:"Home.ctrl",
    abstract: true
  }).state({
    name: 'home.user',
    url: '/user',
    templateUrl: 'pages/user/user.html',
    controller:"User.ctrl"
  }).state({
    name: 'view',
    url: '/view',
    templateUrl: 'pages/view/view.html',
    controller:"view.ctrl",
  }).state({
    name: 'create',
    url: '/create',
    templateUrl: 'pages/create/create.html',
    controller:"create.ctrl"
  })
  .state({
    name: 'home.client',
    url: '/client',
    templateUrl: 'pages/client/client.html',
    controller:"Client.ctrl"
  })
  .state(
    {
      name: 'about',
      url: '/about',
      templateUrl: 'pages/about/about.html'
    }
  );
});