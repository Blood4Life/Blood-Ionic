angular.module('starter.factories', [])

    .factory('UserDataFactory', function ($http) {
        var users = [
            {
                'mobileNo': '4085057783',
                'firstName': 'Sripaul',
                'lastName': 'Asokan',
                'emailAddress': 'sripaulca@outlook.com',
                'bloodGroup': 'A+',
                'password': 'SteelBird',
                'workAddress': {},
                'homeAddress': {},
                'isWillingDonor': true
            },
            {
                'mobileNo': '4085057785',
                'firstName': 'Madhan',
                'lastName': 'Thyagarajan',
                'emailAddress': 'mthyagarajan@pp.com',
                'bloodGroup': 'B+',
                'password': 'Madhan',
                'workAddress': {},
                'homeAddress': {},
                'isWillingDonor': true
            },
            {
                'mobileNo': '4085057786',
                'firstName': 'Shyama',
                'lastName': 'Madhan',
                'emailAddress': 'shyama@pp.com',
                'bloodGroup': 'B+',
                'password': 'Madhan',
                'workAddress': {},
                'homeAddress': {},
                'isWillingDonor': false
            },
            {
                'mobileNo': '4085057787',
                'firstName': 'Sachin',
                'lastName': 'Tendulkar',
                'emailAddress': 'sachin@pp.com',
                'bloodGroup': 'A+',
                'password': 'Madhan',
                'workAddress': {},
                'homeAddress': {},
                'isWillingDonor': true
            },
            {
                'mobileNo': '4085057786',
                'firstName': 'Dhoni',
                'lastName': 'MS',
                'emailAddress': 'dhoni@pp.com',
                'bloodGroup': 'B+',
                'password': 'Madhan',
                'workAddress': {},
                'homeAddress': {},
                'isWillingDonor': false
            }
        ];


        return {
            getAllUsers: function () {
                return users;
            },

            searchDonors: function(bloodGroup, location) {
                return users;
            }

        }
    });


