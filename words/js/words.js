function Words($scope){
console.log($scope);
  $scope.spaces = [ 
    { text: 'a', id: 1 },
    { text: 'b', id: 2 },
    { text: 'c', id: 3 }
  ];

  $scope.getWords = function(){

    return $scope.spaces

  };

  $scope.letter_1 = "a";
  $scope.letter_2 = "b";
  $scope.letter_3 = "c";

}
