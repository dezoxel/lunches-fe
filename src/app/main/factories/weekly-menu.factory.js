(function() {
  'use strict';

  angular
    .module('lunchesFe')
    .factory('WeeklyMenu', function ($q, currentWeekMenuFixture) {
      function WeeklyMenu() {
      }

      WeeklyMenu.fetchCurrentWeek = function() {
        return $q(function(resolve) {
          resolve(currentWeekMenuFixture);
        }.bind(this));
      };

      return WeeklyMenu;
    });
})();
