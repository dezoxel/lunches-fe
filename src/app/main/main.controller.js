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

        vm.sizes = ['medium', 'big'];
      };

      vm.sizesMap = {
        medium: 'Средняя',
        big: 'Большая'
      };

      vm.weekdaysMap = {
        mon: 'Пн',
        tue: 'Вт',
        wed: 'Ср',
        thu: 'Чт',
        fri: 'Пт'
      };

      vm.sizeTitleFor = function(size) {
        return vm.sizesMap[size];
      };

      vm.weekdayTitleFor = function(weekday) {
        return vm.weekdaysMap[weekday];
      };

      vm.totalPrice = function(weekday) {
        var priceType = vm._selectedComponentsToPriceType(weekday.components);
        var size = weekday.size;

        return weekday.price[size][priceType] || 0;
      };

      vm.toggleExlcude = function(component) {
        component.excluded = !component.excluded;
      };

      vm.hasThatSize = function(weekday, size) {
        return weekday.size === size;
      };

      vm.toCommaString = function(list) {
        return list.join(', ');
      };

      vm.selectSize = function(weekday, size) {
        weekday.size = size;
      };

      vm.isMediumSize = function(size) {
        return size === 'medium';
      };

      vm.isBigSize = function(size) {
        return size === 'big';
      };

      vm._selectedComponentsToPriceType = function(components) {
        var includedComponents = [];

        for (var componentType in components) {
          var component = components[componentType];

          if (!component.excluded) {
            includedComponents.push(componentType);
          }
        }

        return includedComponents.join('_');
      };

      vm.init();
    });
})();
