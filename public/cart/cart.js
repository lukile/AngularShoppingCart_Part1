'use strict';

angular.module('cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])

.controller('CartCtrl', ['$scope', function($scope) {
    $scope.categories = [
      {
        name: 'Cuisine',
        items: [
          { name: 'Four', amount: 600 },
          { name: 'Frigo', amount: 200 },
          { name: 'Micro-ondes', amount: 75 }
        ]
      },
      {
        name: 'Salon',
        items: [
          { name: 'Canape', amount: 400},
          { name: 'Table basse', amount: 150 },
          { name: 'TV', amount: 380 }
        ]
      },
      {
        name: 'Salle de bains',
        items: [
          { name: 'Lavabo', amount: 150 },
          { name: 'Douche Italienne', amount: 1200 },
          { name: 'WC', amount: 275 }
        ]
      },
      {
        name: 'Chambre',
        items: [
          { name: 'Lit', amount: 800},
          { name: 'Armoire', amount: 350 },
          { name: 'Table de chevet', amount: 65 }
        ]
      }
    ];
}]);
