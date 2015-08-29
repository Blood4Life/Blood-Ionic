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
                'workAddress': {
                    actual : {

                    },
                    coordinates: {
                        'lat' : 37.399769,
                        'lon' : -121.944188
                    }
                },
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
                'workAddress': {
                    actual : {

                    },
                    coordinates: {
                        'lat' : 37.412697,
                        'lon' : -121.959965
                    }
                },
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
                'workAddress': {
                    actual : {

                    },
                    coordinates: {
                        'lat' : 37.557651,
                        'lon' : -121.969085
                    }
                },
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
                'workAddress': {
                    actual : {

                    },
                    coordinates: {
                        'lat' : 37.384782,
                        'lon' : -121.945147
                    }
                },
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
                'workAddress': {
                    actual : {

                    },
                    coordinates: {
                        'lat' : 37.335372,
                        'lon' : -121.890299
                    }
                },
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


