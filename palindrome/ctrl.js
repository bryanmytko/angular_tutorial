var myApp = angular.module('myApp',[]);

myApp.filter('reverse',function(){
  return function(text){
    return (text) ? text.split("").reverse().join("") : text;
  }
})

function Ctrl($scope, $filter){
  $scope.is_palindrome = false;
  $scope.isPalindrome = function(word){
    if(!word) return;
    word = word.replace(/ /g,'').toLowerCase();
    if(word == $filter('reverse')(word)){
      $scope.is_palindrome = true;
      return ' is a palindrome!';
    } else {
      $scope.is_palindrome = false;
      return ' is NOT a palindrome!';
    }
  };
}
