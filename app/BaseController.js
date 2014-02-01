function BaseController($scope, $http) {
    // Başlarken, Result değeri "0" olarak set edilir
    $scope.Result = 0;

    // Numaralar tıklandığında
    $scope.ClickNumber = function (Number) {
        if ($scope.Result == 0)
            $scope.Result = $scope.Result + Number;
        else
            $scope.Result = $scope.Result + Number.toString();
    }

    // Operatörler tıklandığında
    $scope.ClickOperator = function (Operator) {

    }

    // Sonuç için "eşittir" işareti tıklandığında
    $scope.ClickResult = function () {

    }

    // Temizleme tuşu tıklandığında
    $scope.ClickClear = function () {

    }
}