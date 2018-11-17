$(document).ready(function(){
    $("#upButton").click(function(){
        $("#box").animate({
            "bottom": "+=350px"
        },
        5000
        );
    });
});

$(document).ready(function(){
    $("#downButton").click(function(){
        $("#box")
        .clearQueue()
        .stop()
        .animate({
            "bottom": "-=350px"
        },
        5000
        );
    });
});



$(document).ready(function(){
    $("#leftButton").click(function(){
        $("#box").animate({
            "right": "-=350px"
        },
        5000
        );
    });
});

$(document).ready(function(){
    $("#rightButton").click(function(){
        $("#box").animate({
            "right": "+=350px"
        },
            5000
        );
    });
});

$(document).ready(function(){
    $("#fadeOutButton").click(function(){
        $("#box").fadeOut(500);
    });
});

$(document).ready(function(){
    $("#fadeInButton").click(function(){
        $("#box").fadeOut();
        $("#box").fadeIn(4000);
    });
});

$(document).ready(function(){
    $("#blinkButton").click(function(){
        $("#box").fadeOut(500);
        $("#box").fadeIn(500);
    });
});


$(document).ready(function(){
    $("#resetButton").click(function(){
        location.reload();
    });
});