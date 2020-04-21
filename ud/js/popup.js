status = "Mr.Cong"
var a = new Array(),
    n = ""
a[1] = 'Đ';
a[2] = 'ú';
a[3] = 'n';
a[4] = 'g';
a[5] = ' ';
a[6] = 'v';
a[7] = 'ậ';
a[8] = 'y';
a[9] = '!';
a[10] = ' ';
a[11] = 'A';
a[12] = 'n';
a[13] = 'h';
a[14] = ' ';
a[15] = 'M';
a[16] = 'a';
a[17] = 'n';
a[18] = 'H';
a[19] = ' ';
a[20] = 'Đ';
a[21] = 'ẹ';
a[22] = 'p';
a[23] = ' ';
a[24] = 'T';
a[25] = 'r';
a[26] = 'a';
a[27] = 'i';
a[28] = ' ';
a[29] = 'V';
a[30] = 'à';
a[31] = ' ';
a[32] = 'T';
a[33] = 'ố';
a[34] = 't';
a[35] = ' ';
a[36] = 'N';
a[37] = 'h';
a[38] = 'ấ';
a[39] = 't';
a[40] = ' ';
a[41] = 'V';
a[42] = 'ũ';
a[43] = ' ';
a[44] = 'T';
a[45] = 'r';
a[46] = 'ụ';
a[47] = ' ';
a[48] = '♥';
a[49] = ' ';
a[50] = 'Y';
a[51] = 'ê';
a[52] = 'u';
a[53] = ' ';
a[54] = 'A';
a[55] = 'n';
a[56] = 'h';
a[57] = '♥';
a[58] = '♥';
a[59] = '♥';
a[60] = '♥';



function one() {
    t = document.f.txt.value
    j = t.length
    if (j > 0) {
        for (var i = 1; i <= j; i++) {
            n = n + a[i]
            if (i == 61 || i == 62 || i == 63 || i == 64 || i == 65 || i == 66 || i == 67 || i == 68 || i == 69 || i == 70 ||
                i == 71 || i == 72 || i == 73 || i == 74 || i == 75 || i == 76 || i == 77 || i == 78 || i == 79 || i == 80) {
                document.f.txt.value = ""
                n = ""
            }
        }
    }
    document.f.txt.value = n
    n = ""
    setTimeout("one()", 1)
}

function s() {}

function on() {
    one()
}

$(document).ready(function() {
    $('#k').hide();
    $('h1').click(function() {
        $('.active').removeClass('active');
        $('#k').slideUp('fast');
        if ($(this).next('#k').is(':hidden') == true) {
            $(this).addClass('active');
            $(this).next('#k').slideDown('fast');
        }
    });
});

function Yeu() {
    $("#divResult").fadeOut(0);
    $("#divResult").html("</br><h2>Ủ ÔI! AI CŨNG NÓI VẬY ĐÓ <img src='../jmg/adore.gif'</img></h2>");
    $("#divResult").fadeIn(2000, function() {
        $("#divResult2").fadeOut(0);
        $("#divResult2").html("<p>Mặc kệ người ta nói, Anh chỉ yêu mình em hoy <img src='../jmg/angry.gif'/></p></br>");
        $("#divResult2").fadeIn(2000, function() {
            $("#divResult3").fadeOut(0);
            $("#divResult3").html("<p>Anh yêu em lắm ♥ <img src='../jmg/sure.gif'/></p></br>");
            $("#divResult3").fadeIn(2000);
        });
    });
}