function juiceCounter($scope, $locale) {
  $scope.juices = [0, 1, 2, 3, 4, 5, 6];
  if ($locale.id == 'en-us') {
    $scope.juiceForms = {
      0: 'no juices',
      one: '{} juice',
      other: '{} juices'
    };
  } else {
    $scope.juiceForms = {
      0: 'žiadne pivo',
      one: '{} pivo',
      few: '{} pivá',
      other: '{} pív'
    };
  }
}
