/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, white: true, nomen: true */
/*global angular*/

angular.module('{%= name %}', [
  'ngRoute'
]).config(function (
  $routeProvider
) {
  'use strict';

  // routes
  
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'home'
  });
  
  $routeProvider.otherwise({redirectTo: '/'});
  
});
