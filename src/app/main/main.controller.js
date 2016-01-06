(function() {
  'use strict';

  angular
    .module('lunchesFe')
    .controller('MainController', function($log, $document, WeeklyMenu) {

      var vm = this;

      vm.init = function() {
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

      // TODO: Move to constant?
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

      vm.addToBasket = function(weekday) {
        vm.scrollTo(vm.weekdayAfterThis(weekday.alias));
        // TODO: Copy only what we need
        vm.order[weekday.alias] = angular.copy(weekday);
      };

      vm.weekdayAfterThis = function(weekday) {
        var weekdaysArray = Object.keys(vm.weekdaysMap);
        var currenWeekdayIndex = weekdaysArray.indexOf(weekday);
        var nextWeekday = weekdaysArray[currenWeekdayIndex + 1];
        return nextWeekday;
      };

      vm.scrollTo = function(weekday) {
        var el = document.getElementById(weekday);
        if (!el) {
          return ;
        }

        var $el = angular.element(el);
        $document.scrollToElementAnimated($el);
      };

      vm.isNeedDisableOrderButton = function(weekday) {
        return vm.totalPrice(weekday) === 0;
      };

      vm.init();
    });
})();
