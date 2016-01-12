(function() {
  'use strict';

  angular.module('lunchesFe')
    .value('currentWeekMenuFixture', {
      mon: {
        alias: 'mon',
        size: 'medium',
        price: {
          big: {
            meat_garnish_salad: 75,
            meat_garnish: 65,
            meat_salad: 60,
            garnish_salad: 55,
            meat: 45,
            garnish: 40,
            salad: 35
          },
          medium: {
            meat_garnish_salad: 65,
            meat_garnish: 55,
            meat_salad: 50,
            garnish_salad: 45,
            meat: 35,
            garnish: 30,
            salad: 25
          }
        },
        components: {
          meat: {
            title: 'Куриная котлета',
            type: 'meat',
            weight: 200,
            ingredients: ['Курица'],
            excluded: false
          },
          garnish: {
            title: 'Гречка',
            type: 'garnish',
            weight: 300,
            ingredients: ['Гречка'],
            excluded: true
          },
          salad: {
            title: 'Салат из сельдерея',
            type: 'salad',
            weight: 100,
            ingredients: ['Сельдерей'],
            excluded: false
          }
        }
      },
      tue: {
        alias: 'tue',
        size: 'big',
        price: {
          big: {
            meat_garnish_salad: 85,
            meat_garnish: 75,
            meat_salad: 70,
            garnish_salad: 65,
            meat: 55,
            garnish: 50,
            salad: 45
          },
          medium: {
            meat_garnish_salad: 75,
            meat_garnish: 65,
            meat_salad: 60,
            garnish_salad: 55,
            meat: 45,
            garnish: 40,
            salad: 35
          }
        },
        components: {
          meat: {
            title: 'Свиной биток',
            weight: 240,
            ingredients: ['Свинина'],
            excluded: false
          },
          garnish: {
            title: 'Рис с овощами',
            weight: 300,
            ingredients: ['Рис', 'Овощи'],
            excluded: false
          },
          salad: {
            title: 'Салат из свеклы с сыром',
            weight: 100,
            ingredients: ['Свекла, Сыр'],
            excluded: true
          }
        }
      },
      wed: {
        alias: 'wed',
        size: 'big',
        price: {
          big: {
            meat_garnish_salad: 85,
            meat_garnish: 75,
            meat_salad: 70,
            garnish_salad: 65,
            meat: 55,
            garnish: 50,
            salad: 45
          },
          medium: {
            meat_garnish_salad: 75,
            meat_garnish: 65,
            meat_salad: 60,
            garnish_salad: 55,
            meat: 45,
            garnish: 40,
            salad: 35
          }
        },
        components: {
          meat: {
            title: 'Свиной биток',
            weight: 240,
            ingredients: ['Свинина'],
            excluded: false
          },
          garnish: {
            title: 'Рис с овощами',
            weight: 300,
            ingredients: ['Рис', 'Овощи'],
            excluded: false
          },
          salad: {
            title: 'Салат из свеклы с сыром',
            weight: 100,
            ingredients: ['Свекла, Сыр'],
            excluded: true
          }
        }
      },
      thu: {
        alias: 'thu',
        size: 'big',
        price: {
          big: {
            meat_garnish_salad: 85,
            meat_garnish: 75,
            meat_salad: 70,
            garnish_salad: 65,
            meat: 55,
            garnish: 50,
            salad: 45
          },
          medium: {
            meat_garnish_salad: 75,
            meat_garnish: 65,
            meat_salad: 60,
            garnish_salad: 55,
            meat: 45,
            garnish: 40,
            salad: 35
          }
        },
        components: {
          meat: {
            title: 'Свиной биток',
            weight: 240,
            ingredients: ['Свинина'],
            excluded: false
          },
          garnish: {
            title: 'Рис с овощами',
            weight: 300,
            ingredients: ['Рис', 'Овощи'],
            excluded: false
          },
          salad: {
            title: 'Салат из свеклы с сыром',
            weight: 100,
            ingredients: ['Свекла, Сыр'],
            excluded: true
          }
        }
      },
      fri: {
        alias: 'fri',
        size: 'big',
        price: {
          big: {
            meat_garnish_salad: 85,
            meat_garnish: 75,
            meat_salad: 70,
            garnish_salad: 65,
            meat: 55,
            garnish: 50,
            salad: 45
          },
          medium: {
            meat_garnish_salad: 75,
            meat_garnish: 65,
            meat_salad: 60,
            garnish_salad: 55,
            meat: 45,
            garnish: 40,
            salad: 35
          }
        },
        components: {
          meat: {
            title: 'Свиной биток',
            weight: 240,
            ingredients: ['Свинина'],
            excluded: false
          },
          garnish: {
            title: 'Рис с овощами',
            weight: 300,
            ingredients: ['Рис', 'Овощи'],
            excluded: false
          },
          salad: {
            title: 'Салат из свеклы с сыром',
            weight: 100,
            ingredients: ['Свекла, Сыр'],
            excluded: true
          }
        }
      }
    });
})();
