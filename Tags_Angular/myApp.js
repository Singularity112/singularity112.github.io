var app = angular.module('myApp', []);
app.controller('myController',function ($scope) {
    $scope.item = [
        {
            title: "The Engineer",
            tags: ["serious","news"],
            active: true
        },
        {
            title: "Funny cat pictures",
            tags: ["humor","animals"],
            active: true
        },
        {
            title: "Veterinary medicine",
            tags: ["serious","animals","doctor"],
            active: true
        },
        {
            title: "Doctor aibolit",
            tags: ["humor","doctor"],
            active: true
        },
        {
            title: "On building a wall",
            tags: ["Policy","serious"],
            active: true
        },
        {
            title: "Airline Pet Policies",
            tags: ["Policy","news"],
            active: true
        }
    ];

    $scope.tags = [
        {
            tag: "news",
            active: true
        },
        {
            tag: "animals",
            active: false
        },
        {
            tag: "serious",
            active: true
        },
        {
            tag: "humor",
            active: false
        },
        {
            tag: "doctor",
            active: true
        },
        {
            tag: "Policy",
            active: true
        }
    ];

    $scope.toggle = function(t){
        t.active = !t.active;
    };

    $scope.total = function () {

        var go = true;
        angular.forEach($scope.item, function (t) {
            go = true;
            angular.forEach(t.tags, function (itemTag)
            {
                angular.forEach($scope.tags, function (tag) {
                    if (go) {
                        if (itemTag == tag.tag) {
                            if (tag.active){
                                t.active = true;
                                go = false;
                            }
                            else
                            {
                                t.active = false;
                            }
                        }
                    }
                });
            });
        });
    }

});