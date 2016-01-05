(function() {
  'use strict';

  angular
    .module('lunchesFe')
    .controller('MainController', function($log, WeeklyMenu) {

      var vm = this;

      vm.init = function() {
        vm.weeklyMenu = null;

        WeeklyMenu.fetchCurrentWeek()
          .then(function(menu) {
            vm.weeklyMenu = menu;
          });

        vm.sizes = ['Большая', 'Средняя'];

        vm.order = {
          mon: {},
          tue: {},
          wed: {},
          thu: {},
          fri: {},
        };
      };

      vm.toggleExlcude = function(component) {
        component.excluded = !component.excluded;
      };

      vm.cssClassForWeekday = function(weekday) {
        return weekday.alias;
      };

      vm.toCommaString = function(list) {
        return list.join(', ');
      };


      vm.selectSizeForWeekday = function(weekday, size) {
        vm.order.weekdays[weekday].size = size;
      };

      vm.sizeForWeekday = function(weekday) {
        return vm.order.weekdays[weekday].size;
      };

      vm.init();
    });
})();
