angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {})

.controller('HomeCtrl', function ($scope, $stateParams) {})

.controller('WelcomeCtrl', function ($scope, $stateParams) {})

.controller('LoginCtrl', function ($scope, $stateParams) {})

.controller('SignupCtrl', function ($scope, $stateParams) {})

.controller('SigninCtrl', function ($scope, $stateParams) {})

.controller('ProfileCtrl', function ($scope, $stateParams) {})

.controller('DetailCtrl', function ($scope, $stateParams) {
    $scope.tab = 'profile';
    $scope.tabchange = function (tab) {
        console.log(tab);
        $scope.tab = tab;
    };

});