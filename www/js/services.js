/**
 * Created by srasokan on 5/24/15.
 */
angular.module('starter.services', [])

    .service('SignupService', function ($q) {
        return {
            singupUser: function (name, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (name == '408' && pw == 'secret') {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }
                promise.success = function (fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            }
        }
    })

    .service('ValidatorService', function ($q) {
        return {
            isPasswordSame : function(password, rePassword) {
                return password === rePassword;
            }
        }
    })

    .service('LoginService', function ($q, UserDataFactory) {
        return {
            loginUser: function (name, pw) {
                //console.log(UserDataService.getAllUsers());
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (name == '408' && pw == 'secret') {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }
                promise.success = function (fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            }
        }
    })

    .service('SearchDonorsService', function (UserDataFactory) {
        return {
            searchDonors: function (selectedBloodGroup) {
                //TODO: how to get current location in ionic?
                return UserDataFactory.searchDonors(selectedBloodGroup, null);
            }
        }
    });
