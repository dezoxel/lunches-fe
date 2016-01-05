(function() {
  'use strict';

  angular
    .module('lunchesFe')
    .controller('NavbarDirectiveController', function() {
      var vm = this;

      vm.init = function() {
        vm.today = null;

        vm.weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'];
      };

      vm.isActive = function(weekday) {
        return weekday === vm.today;
      };

      vm.goTo = function(weekday) {
        vm.today = weekday;
      };

      vm.init();
    })

    .directive('navbar', function() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        scope: {},
        controller: 'NavbarDirectiveController',
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;
    });

})();
