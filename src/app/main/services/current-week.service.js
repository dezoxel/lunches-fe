(function() {
  'use strict';

  angular
    .module('lunchesFe')
    .service('currentWeek', function ($document) {

      function CurrentWeek() {
        this._currentWeekday = 'mon';

        this._titlesMap = {
          mon: 'Пн',
          tue: 'Вт',
          wed: 'Ср',
          thu: 'Чт',
          fri: 'Пт'
        };
      }

      CurrentWeek.prototype.getWeekdays = function() {
        return Object.keys(this._titlesMap);
      };

      CurrentWeek.prototype.setCurrentDayTo = function(weekday) {
        this._currentWeekday = weekday;

        this.scrollTo(weekday);
      };

      CurrentWeek.prototype.titleFor = function(weekday) {
        return this._titlesMap[weekday];
      };

      CurrentWeek.prototype.isActive = function(weekday) {
        return this._currentWeekday === weekday;
      };

      CurrentWeek.prototype.scrollTo = function(weekday) {
        var weekdayElement = angular.element($document.find('#' + weekday));

        $document.scrollToElementAnimated(weekdayElement);
      };

      return new CurrentWeek();
    });
})();