angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
})

.controller('ListCtrl', function($scope, $state) {
  $scope.goHello = function(){
    $state.go('hello');
  };
  $scope.goToast = function(){
  	$state.go('toast');
  };
  $scope.goDialog = function(){
  	$state.go('dialog');
  };
  $scope.goScan = function(){
    $state.go('scan');
  };
})

.controller('HelloCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
  $scope.sayHello = function(){
    hello.alert();
  }
  $scope.scan = function(){
    scan.recognize(function(res){
      $scope.result = res;
    });
  }
})

.controller('ToastCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };

  $scope.toast1 = function(){
    myToast.javaShow();
  }

  $scope.toast2 = function(){
    myToast.javaShowJs("hhhh",5);
  }

  $scope.toast3 = function(){
    myToast.jsShowJava(function(msg) {
                alert(msg);
            }, function(msg) {
                alert(msg);
            });
  }
})

.controller('DialogCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
  $scope.showDialog = function(){
    alertDialog.show("hello cordova-plugin-dialog");
  }
})

.controller('ScanCtrl', function($scope, $state) {
  $scope.goBack = function(){
    $state.go('list');
  };
  $scope.scan = function(){
    scan.recognize(function(res){
      $scope.result = res;
    });
  };
})

;
