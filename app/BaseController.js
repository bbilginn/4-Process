function BaseController($scope, $http) {

    $scope.Result = 0;


    // Numaralar tıklandığında
    $scope.Number = function (Number) {
        if ($scope.Result == 0)
            $scope.Result = $scope.Result + Number;
        else
            $scope.Result = $scope.Result + Number.toString();
    }
}