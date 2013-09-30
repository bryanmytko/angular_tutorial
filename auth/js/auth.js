var auth = angular.module('auth',[]);

auth.config(function($routeProvider){
  $routeProvider
  .when('/',{templateUrl: 'login.html',controller: AuthController})
  .when('/home',{templateUrl: 'home.html',controller: HomeController})
  .otherwise({redirectTo: '/'})
});

var AuthController = function($scope,$location){
  $scope.error = {login: 'Incorrect Login and/or Password!', password: 'Wrong Password'};
  $scope.is_error = false;
  $scope.login = function(){
    if(($scope.user.name == 'bryan') && ($scope.user.password == 'password'))
      $location.path('/home');
    else $scope.is_error = true;
  };
};

var HomeController = function($scope){};
