angular.module('starter.controllers', [])

.controller('CtrlLogin', function($scope, $ionicPopup, $state, $ionicModal) {
   $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

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
  $scope.List_Click_CHeckBook = function() {
        $state.go('ListPage');
        $rootScope.Title='Issue Check Book';
    }
    $scope.List_Click_BlockCard = function() {
        $state.go('ListPage');
         $rootScope.Title='Block Card';
    }
    $scope.List_Click_ActiveCall = function() {
        $state.go('ListPage');
         $rootScope.Title='Active Call';
    }
   $scope.List_Click_CustService = function() {
        $state.go('ListPage');
         $rootScope.Title='Customer Services';
    }

})
.controller('CtrlList', function($scope, $ionicPopup, $state) {

})

.controller('CtrlSignup', function($scope, $ionicPopup, $state) {

	 $scope.items = [1,2,3];
  $scope.doRefresh = function() {
    $http.get('/new-items')
     .success(function(newItems) {
       $scope.items = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };

});