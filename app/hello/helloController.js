(function () {
  angular.module('SampleApp.hello', [])

  .controller('HelloController', [
    '$scope',
    'helloRestService',
    function($scope, helloRestService) {
      $scope.test = "Testing...";

      helloRestService.getTestData().
                then(function (response) {
                    $scope.data = response;
                });
    }
  ]);

}());
