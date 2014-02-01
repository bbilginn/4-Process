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
                $scope.Result = $scope.First * $scope.Result;
                break;
            case '/':
                if ($scope.Result != 0) $scope.Result = $scope.First / $scope.Result;
                else alert("Sıfıra bölünemez!");
                break;
            case '+':
                $scope.Result = $scope.First + $scope.Result;
                break;
            case '-':
                $scope.Result = $scope.First - $scope.Result;
                break;
        }
        FirstAndOperatorClear();
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