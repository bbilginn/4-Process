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
        $scope.First = $scope.Result
        $scope.Operator = Operator;
        $scope.Result = 0;
    }

    // Sonuç için "eşittir" işareti tıklandığında
    $scope.ClickResult = function () {
        switch ($scope.Operator) {
            case '*':
                $scope.Result = parseFloat($scope.First) * parseFloat($scope.Result);
                break;
            case '/':
                if ($scope.Result != 0) $scope.Result = parseFloat($scope.First) / parseFloat($scope.Result);
                else alert("Sıfıra bölünemez!");
                break;
            case '+':
                $scope.Result = parseFloat($scope.First) + parseFloat($scope.Result);
                break;
            case '-':
                $scope.Result = parseFloat($scope.First) - parseFloat($scope.Result);
                break;
        }
        FirstAndOperatorClear();
    }

    // Pozitif-Negatif tuşu tıklandığında
    $scope.ClickSwitch = function () {
        if ($scope.Result.toString().substring(0, 1) == "-")
            $scope.Result = $scope.Result.toString().replace('-', '');
        else
            $scope.Result = "-" + $scope.Result;
    }

    // Silme tuşu tıklandığında
    $scope.ClickBackSpace = function () {
        $scope.Result = $scope.Result.toString().substring(0, $scope.Result.toString().length - 1);
        FirstAndOperatorClear();
    }

    // Temizleme tuşu tıklandığında
    $scope.ClickClear = function () {
        $scope.Result = 0;
        FirstAndOperatorClear();
    }

    function FirstAndOperatorClear() {
        $scope.First = null;
        $scope.Operator = null;
    }
}