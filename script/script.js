var app = angular.module('myApp', []);
app.controller('myController',function ($scope) {

    var tag = "All";

    $scope.tech = [
        {
            id : 1,
            title: "HTML",
            img: "img/html.png"
        },
        {
            id : 2,
            title: "CSS",
            img: "img/css.png"
        },
        {
            id : 3,
            title: "JavaScript",
            img: "img/js.png"
        },
        {
            id : 4,
            title: "AngularJS",
            img: "img/angular.png"
        },
        {
            id : 5,
            title: "Bootstrap",
            img: "img/bootstrap.png"
        },
        {
            id : 6,
            title: "Jquery",
            img: "img/jquery.png"
        }
    ]

    $scope.item = [
        {
            title: "ChangeDiv",
            tags: ["Javascript"],
            img: "img/ChangeDiv.png",
            href: "ChangeDiv/index.html",
            active: true
        },
        {
            title: "landingPage",
            tags: ["Bootstrap"],
            img: "img/landing.PNG",
            href: "landingPage/index.html",
            active: true
        },
        {
            title: "AngularJS Tags",
            tags: ["Javascript"],
            img: "img/tag.PNG",
            href: "Tags_Angular/index.html",
            active: true
        },
        {
            title: "Ishop",
            tags: ["Javascript","Bootstrap"],
            img: "img/ishop.png",
            href: "ishop/index.html",
            active: true
        },
        {
            title: "old portfolio",
            tags: ["Bootstrap"],
            img: "img/portf.PNG",
            href: "portf/index.html",
            active: true
        },
        {
            title: "Holdstudio",
            tags: ["Bootstrap", "Javascript"],
            img: "img/holdstudio.png",
            href: "http://holdstudio.com",
            active: true
        },
        {
            title: "Raysol",
            tags: ["Bootstrap", "Javascript"],
            img: "img/raysol.png",
            href: "http://raysol.co.il",
            active: true
        }
    ];

    $scope.tags = [
        {
            title: "All"
        },
        {
            title: "Bootstrap"
        },
        {
            title: "Javascript"
        }
    ]


    $scope.toggle = function(t){
        tag = t;
        if (tag == "All")
        {
            angular.forEach($scope.item, function (i) {
                i.active = true;
            })
        }
        else{
            angular.forEach($scope.item,function (i)
            {
                var act = false;
               angular.forEach(i.tags, function (it) {
                  if (it == tag)
                      act = true;
               })
                i.active = act;
            })
        }
    };

    $scope.selected = 0;

    $scope.select= function(index) {
        $scope.selected = index;
    };

});

window.onscroll = function() {
    var scroll = document.body.scrollTop;
    if (scroll < 700)
    {
        showIntro();
    }
    if (scroll > 300 && scroll < 800)
    {
        animabout();
    }
    if (scroll > 800 && scroll < 1200)
    {
        animportf();
    }

    if (scroll > 1600 && scroll < 1900)
    {
        animtech();
    }
    if (scroll > 2000)
    {
        animcont();
    }
}

window.onload = function () {
    if (document.body.scrollTop < 700) {
        showIntro();
    }
}

function showIntro() {
    $("#logo").fadeIn({queue: false, duration: 800});
    $("#under").fadeIn({queue: false, duration: 800});
    $("#under").animate({ 'top': 0 }, 800);
}

function animportf() {
    $( "#portfolio .anim-top" ).fadeIn({queue: false, duration: 800});
    $( "#portfolio .anim-top").animate({"bottom" : 0}, 800);
}

function animabout() {
    $( "#about .anim-top" ).fadeIn({queue: false, duration: 800});
    $( "#about .anim-top").animate({"bottom" : 0}, 800);
    $( "#about .anim-bottom").fadeIn({queue: false, duration: 800});
    $( "#about .anim-bottom").animate({"top" : 0}, 800);
}

function animtech() {
    $( "#technologies .anim-bottom").fadeIn({queue: false, duration: 800});
    $( "#technologies .anim-bottom").animate({"top": 0}, 800);
}

function animcont() {
    $( "#contact .anim-top").fadeIn({queue: false, duration: 800});
    $( "#contact .anim-top").animate({"bottom": 0}, 800);
    $( "#contact .anim-left").fadeIn({queue: false, duration: 800});
    $( "#contact .anim-left").animate({"left": 0}, 800);
    $( "#contact .anim-right").fadeIn({queue: false, duration: 800});
    $( "#contact .anim-right").animate({"right": 0}, 800);
}

