(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
  })

  var gem = {
    name: 'Ruby',
    price: 10
  }
})();
