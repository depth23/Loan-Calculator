var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, BankService) {
    BankService.getInterestRate().then(function(rate){
        $scope.interest_rate = rate
        console.log($scope.interest_rate)
    });
    
    
    
    $scope.calculatePayment = function() {
            var P = Number($scope.principal);
            var r = Number($scope.interest_rate);
            var t = 4;
            console.log((P*r*t) + P);
            $scope.monthly_payment = ((P + (P*r*t)) / (t*12)).toFixed(2);
        }
});