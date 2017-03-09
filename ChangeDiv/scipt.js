$( function() {
    $('#slideHeight').empty().slider({
        min: 250,
        max: 750,
        value: 500,
        animate: true,
        slide: function (event, ui) {
            $(this).parent().children('div').children('a').text(ui.value);
            $('#object').css("height", ui.value);
        }
    });

    $('#slideWidth').empty().slider({
        min: 250,
        max: 750,
        value: 500,
        animate: true,
        slide: function (event, ui) {
            $(this).parent().children('div').children('a').text(ui.value);
            $('#object').css("width", ui.value);
        }
    });

    $('#top-left').empty().slider({
        min: 0,
        max: 200,
        value: 0,
        animate: true,
        slide: function (event, ui) {
            $(this).parent().children('div').children('a').text(ui.value);
            $('#object').css("border-top-left-radius", ui.value);
        }
    });

    $('#top-right').empty().slider({
        min: 0,
        max: 200,
        value: 0,
        animate: true,
        slide: function (event, ui) {
            $(this).parent().children('div').children('a').text(ui.value);
            $('#object').css("border-top-right-radius", ui.value);
        }
    });

    $('#bottom-left').empty().slider({
        min: 0,
        max: 200,
        value: 0,
        animate: true,
        slide: function (event, ui) {
            $(this).parent().children('div').children('a').text(ui.value);
            $('#object').css("border-bottom-left-radius", ui.value);
        }
    });

    $('#bottom-right').empty().slider({
        min: 0,
        max: 200,
        value: 0,
        animate: true,
        slide: function (event, ui) {
            $(this).parent().children('div').children('a').text(ui.value);
            $('#object').css("border-bottom-right-radius", ui.value);
        }
    });

    var borderStyle = "solid";
    var borderTickness = 0;
    var borderColor = "black";

    $('#border-tickness').empty().slider({
        min: 0,
        max: 40,
        value: 0,
        animate: true,
        slide: function (event, ui) {
            $(this).parent().children('div').children('a').text(ui.value);
            borderTickness = ui.value;
            $('#object').css("border", borderTickness + "px " +borderStyle+ " " + borderColor);
        }
    });

    $('#border-style').on('change', function() {
        $(this).parent().children('div').children('a').text(this.value);
        borderStyle = this.value;
        $('#object').css("border", borderTickness + "px " +borderStyle+ " " + borderColor);
    });

    $('#border-color').on('change' , function () {
        $(this).parent().children('div').children('a').text(this.value);
        borderColor = this.value;
        $('#object').css("border", borderTickness + "px " +borderStyle +" " + borderColor);
    });

    $('#object-color').on('change' , function () {
        $('#object').css("backgroundColor", this.value);
    });

    $('#text-color').on('change' , function () {
        $('#object p').css("color", this.value);
    });

    $('#font-size').empty().slider({
        min: 1,
        max: 52,
        value: 24,
        animate: true,
        slide: function (event, ui) {
            $(this).parent().children('div').children('a').text(ui.value);
            $('#object p').css("font-size", ui.value + "px");
        }
    });
});