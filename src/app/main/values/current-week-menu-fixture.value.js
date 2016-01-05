(function() {
  'use strict';

  angular.module('lunchesFe')
    .value('currentWeekMenuFixture', {
      mon: {
        title: 'Пн',
        alias: 'mon',
        size: 'Средняя',
        components: {
          meat: {
            title: 'Куриная котлета',
            weight: 200,
            ingredients: ['Курица'],
            excluded: false
          },
          garnish: {
            title: 'Гречка',
            weight: 300,
            ingredients: ['Гречка'],
            excluded: true
          },
          salad: {
            title: 'Салат из сельдерея',
            weight: 100,
            ingredients: ['Сельдерей'],
            excluded: false
          }
        }
      }
    });

})();
