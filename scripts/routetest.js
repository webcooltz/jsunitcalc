var app = angular.module("testApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "view/main.htm"
  })
  .when("/first", {
    templateUrl : "view/first.htm"
  })
  .when("/second", {
    templateUrl : "view/second.htm"
  })
  .when("/third", {
    templateUrl : "view/third.htm"
  });
});