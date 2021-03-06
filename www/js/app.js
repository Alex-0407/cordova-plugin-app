// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'starter.services'])

.run(function($ionicPlatform, $ionicHistory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $ionicPlatform.registerBackButtonAction(function (e) {
        //判断处于哪个页面时双击退出
        if ($ionicHistory.backView() ) {
          $ionicHistory.goBack();
        }else {
          // This is the last page: Show confirmation popup
          exitDialog.showExit("您确定要退出吗？",function(res){
            if(res==="exit"){
              ionic.Platform.exitApp();  
            }
          });
        }
        e.preventDefault();
        return false;
    }, 101);

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('list', {
    url: '/list',
    templateUrl: 'templates/list.html',
    controller: 'ListCtrl'
  })

  .state('hello', {
    url: '/hello',
    templateUrl: 'templates/hello.html',
    controller: 'HelloCtrl'
  })

  .state('toast', {
    url: '/toast',
    templateUrl: 'templates/toast.html',
    controller: 'ToastCtrl'
  })

  .state('dialog', {
    url: '/dialog',
    templateUrl: 'templates/dialog.html',
    controller: 'DialogCtrl'
  })

  .state('scan', {
    url: '/scan',
    templateUrl: 'templates/scan.html',
    controller: 'ScanCtrl'
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/list');

});
