angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('UserloginCtrl', function($scope, $stateParams) {
    
           //        ***** tabchange ****

        $scope.tab = 'signin';
        $scope.classa = 'active';
        $scope.classb = '';

        $scope.tabchange = function(tab, a) {

            $scope.tab = tab;
            if (a == 1) {
                $scope.classa = "active";
                $scope.classb = '';

            } else {
                $scope.classa = '';
                $scope.classb = "active";

            }
        };

        //    ****** End ******
              
    
})
.controller('UsersignupCtrl', function($scope, $stateParams) {
});
