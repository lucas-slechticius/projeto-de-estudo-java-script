
$(document).ready(function(){
    $("#campotexto").focus(function(){
        $(this).css("background-color", "yellow");
    });
});

$(document).ready(function(){
    $("#botao5").on({
        mouseenter: function(){
            $(this).css('background-color', 'red');
        },
        click: function(){
            $(this).css('background-color', 'yellow');
        },
        mouseleave: function () {
            $(this).css('background-color', 'blue');
        }
    })
});