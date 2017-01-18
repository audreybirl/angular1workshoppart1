(function () {

'use strict';


  angular.module('SampleApp',
    ['ngRoute',
    //'ngAnimate',
    'SampleApp.core.services.rest',
    'SampleApp.config',
    'SampleApp.hello'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when("/", {
          templateUrl: "./hello/hello.html",
          controller: "HelloController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

}());
