var app = angular.module('LoanCalculator');

app.service('BankService', function ($http) {
    
    this.getInterestRate = function () {
           return $http({
                method: "GET",
                url: "http://localhost:8080/interest_rate"
            }).then(function(response) {                                           
                return response.data.interest_rate;
                                
                });
            };
    
});