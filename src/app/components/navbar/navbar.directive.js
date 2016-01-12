(function() {
  'use strict';

  angular
    .module('lunchesFe')
    .controller('NavbarDirectiveController', function(currentWeek) {
      var vm = this;

      vm.init = function(currentWeek) {
        vm._currentWeek = currentWeek;

        vm.weekdays = vm._currentWeek.getWeekdays();
      };

      vm.weekdayTitleFor = function(weekday) {
        return vm._currentWeek.titleFor(weekday);
      };

      vm.isActive = function(weekday) {
        return vm._currentWeek.isActive(weekday);
      };

      vm.goTo = function(weekday) {
        vm._currentWeek.setCurrentDayTo(weekday);
      };

      vm.init(currentWeek);
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
