import tpl from './home.html';
import './home.less';

angular.module('app').component('home', {
    template: tpl,
    controller: homeCtrl,
    controllerAs: 'vm'
});

homeCtrl.$inject = [
    '$http', 
    '$mdSidenav', 
    '$state'
];
function homeCtrl(
    $http, 
    $mdSidenav, 
    $state
) {
    
};