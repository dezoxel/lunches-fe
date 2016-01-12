(function() {
  'use strict';

  angular
    .module('lunchesFe')
    .controller('MainController', function(WeeklyMenu, currentWeek) {

      var vm = this;

      vm.init = function(currentWeek) {
        vm._currentWeek = currentWeek;

        vm.weeklyMenu = {};
        vm.order = {};

        WeeklyMenu.fetchCurrentWeek()
          .then(function(menu) {
            vm.weeklyMenu = menu;
          });

        vm.sizes = ['medium', 'big'];
      };

      // TODO: Move to constant?
      vm.sizesMap = {
        medium: 'Средняя',
        big: 'Большая'
      };

      vm.sizeTitleFor = function(size) {
        return vm.sizesMap[size];
      };

      vm.weekdayTitleFor = function(weekday) {
        return vm._currentWeek.titleFor(weekday);
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

      vm.addToBasket = function(weekday) {
        vm._currentWeek.setCurrentDayTo(vm.nextWeekdayAfter(weekday.alias));
        // TODO: Copy only what we need
        vm.order[weekday.alias] = angular.copy(weekday);
      };


      vm.nextWeekdayAfter = function(weekday) {
        var weekdaysArray = vm._currentWeek.getWeekdays();
        var currenWeekdayIndex = weekdaysArray.indexOf(weekday);
        var nextWeekday = weekdaysArray[currenWeekdayIndex + 1];
        return nextWeekday;
      };

      vm.isNothingSelected = function(weekday) {
        return vm.totalPrice(weekday) === 0;
      };

      vm.init(currentWeek);
    });
})();
