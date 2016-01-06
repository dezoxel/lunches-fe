(function() {
  'use strict';

  angular
    .module('lunchesFe')
    .controller('NavbarDirectiveController', function($document) {
      var vm = this;

      // TODO: Move to constant?
      vm.weekdaysMap = {
        mon: 'Пн',
        tue: 'Вт',
        wed: 'Ср',
        thu: 'Чт',
        fri: 'Пт'
      };

      vm.init = function() {
        vm.currentWeekday = null;

        vm.weekdays = Object.keys(vm.weekdaysMap);
      };

      vm.weekdayTitleFor = function(weekday) {
        return vm.weekdaysMap[weekday];
      };

      vm.isActive = function(weekday) {
        return weekday === vm.currentWeekday;
      };

      vm.goTo = function(weekday) {
        vm.currentWeekday = weekday;
        vm.scrollTo(weekday);
      };

      vm.scrollTo = function(weekday) {
        var weekdayElement = angular.element(document.getElementById(weekday));
        $document.scrollToElementAnimated(weekdayElement);
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
