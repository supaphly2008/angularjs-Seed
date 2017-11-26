angular.module('app').config([
    '$urlRouterProvider',
    'stateHelperProvider',
    (
      $urlRouterProvider,
      stateHelperProvider
    ) => {
      stateHelperProvider.state({
        name: 'home',
        url: '/home',
        component: 'home',
      });
    }]);
  