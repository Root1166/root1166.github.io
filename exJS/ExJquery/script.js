$("#link").click(function() {
    alert("https://www.javatpoint.com/jquery-tutorial");
});


$(document).ready(function() {
    $("#hide").click(function() {
        $("p").hide(1000);
    });
});
$(document).ready(function() {
    $("#show").click(function() {
        $("p").show(1500);
    });
});

$(document).ready(function() {
    $("#toggle").click(function() {
        $("p").toggle(1500);
    });
});



$(document).ready(function() {
    $("#fadeIn").click(function() {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

$(document).ready(function() {
    $("#fadeOut").click(function() {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});


$(document).ready(function() {
    $("#fadeToggle").click(function() {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});

$(document).ready(function() {
    $("#fadeTo").click(function() {
        $("#div1").fadeTo("slow", 0.3);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.5);
    });
});


$(document).ready(function() {
    $("#flip").click(function() {
        $("#pannel").slideDown();
    });
});


$(document).ready(function() {
    $("#flip1").click(function() {
        $("#pannel").slideUp();
    });
});

$(document).ready(function() {
    $("#flip2").click(function() {
        $("#pannel").slideToggle();
    });
});


$(document).ready(function() {
    $("#Animate").click(function() {
        $("#div4").animate({
            left: '50px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});

$(document).ready(function() {
    $("#img").click(function() {
        $("#img").animate({
            top: '10px',
            left: '350px',
            opacity: '1.5',
            height: '+=500px',
            width: '+=700px'
        });
    });
});

$("#linkAnimate").click(function() {
    alert("https://www.javatpoint.com/jquery-animate");
});




$(document).ready(function() {
    $("#delayDivfadeIn").click(function() {
        $("#div1").delay("fast").fadeIn();
        $("#div2").delay("slow").fadeIn();
        $("#div3").delay("1000").fadeIn();
    });
});


$(document).ready(function() {
    $("#button").click(function() {
        $("#change").html("<p style=' font-size: 20px'>Hello <b>Javatpoint.com</b></p>");
    });
});


// $("p").click(function() {
//     var htmlString = $(this).html();
//     $(this).text(htmlString);
// });


$("p").click(function() {
    var htmlString = $(this).html();
    $(this).text("anhcong9768");
});