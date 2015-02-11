'use strict';

angular.module('dz2', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap','LocalStorageModule'])
  .config(function ($stateProvider, $urlRouterProvider,localStorageServiceProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/guest/guest.html',
        controller: 'GuestCtrl'
      });

    localStorageServiceProvider.setPrefix('guests');
    localStorageServiceProvider.setStorageType('sessionStorage');

    $urlRouterProvider.otherwise('/');
  })
;
