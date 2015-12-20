angular.module('starter.controllers', [])

.controller('CtrlLogin', function($scope, $ionicPopup, $state) {

  $scope.data = {};
 
    $scope.login = function() {

      if ($scope.data.username=='user' && $scope.data.password=='pass') {
        $state.go('home');
      }
      else{
      	 var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
      };
      


    }
     $scope.signup = function() {
        $state.go('signup');
    }
})

.controller('CtrlHome', function($scope, $ionicPopup, $state) {

})
.controller('CtrlSignup', function($scope, $ionicPopup, $state) {

	

});