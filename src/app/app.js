import angular from 'angular';
import '../style/app.css';
// import ngMaterial from 'angular-material';
// import 'angular-material/angular-material.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

// class AppCtrl {
//   constructor($scope, $mdToast) {
//     this.url = 'https://github.com/preboot/angular-webpack';
//   }
// }

AppCtrl.$inject = [
  '$scope', 
  '$rootScope', 
  '$mdToast',
  '$state'
];
function AppCtrl(
  $scope, 
  $rootScope, 
  $mdToast,
  $state
) {
  this.url = 'https://github.com/preboot/angular-webpack';

  this.go = function(){
    $state.go('home');
    console.log('hellllo');
  }
};  

AppConfig.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  'stateHelperProvider'
];
function AppConfig(
  $stateProvider, 
  $urlRouterProvider,
  stateHelperProvider
) {

//   $stateProvider.state("home", {
//     template: "<h1>HELLO!</h1>"
// })

  $urlRouterProvider.when(/^$/, '/home');
  $urlRouterProvider.otherwise('/home');
};

// const MODULE_NAME = 'app';

angular.module('app', [
  'ngMaterial',
  'ngAria',
  'ui.router',
  'ui.router.stateHelper',
  'ngMessages'
])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(AppConfig);

// export default MODULE_NAME;