(function() {
  'use strict';

  angular
    .module('lunchesFe')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
