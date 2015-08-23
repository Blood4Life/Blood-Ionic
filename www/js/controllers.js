angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            {title: 'Donor1', id: 1},
            {title: 'Donor2', id: 2},
            {title: 'Donor3', id: 3},
            {title: 'Donor4', id: 4},
            {title: 'Donor5', id: 5},
            {title: 'Donor6', id: 6}
        ];
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })

    .controller('SignupCtrl', function ($scope, $ionicPopup, $state) {
        $scope.data = {};
        $scope.signup = function () {
            console.log('in here');
            console.log($scope.data.bloodGroup);
            console.log($scope.data.username);
        }
    })

    .controller('SearchDonorsCtrl', function ($scope, $state, SearchDonorsService) {
        $scope.selectedGroup = {};
        $scope.searchDonors = function () {
            var selectedBloodGroup = $scope.selectedGroup.value;
            var searchResult = SearchDonorsService.searchDonors(selectedBloodGroup);
            //map

        }
    })

    .controller('LoginCtrl', function ($scope, $ionicPopup, $state, LoginService) {
        $scope.data = {};
        $scope.login = function () {

            LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
                //if login is success, redirect to search page
                $state.go('app.search');
            }).error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            });

        }
    });
