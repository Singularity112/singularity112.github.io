function change(elem) {
    t = JSON.parse(tel);

    $('#description-body').fadeOut('slow', function () {
        document.getElementById("description-body").innerHTML = t[elem].description;
        $('#description-body').fadeIn('slow');
    });
    $('#description-title').fadeOut('slow', function () {
        document.getElementById("description-title").innerHTML = t[elem].name;
        $('#description-title').fadeIn('slow');
    });
    $('#description-image').fadeOut('slow', function () {
        document.getElementById("description-image").src = t[elem].image;
        $('#description-image').fadeIn('slow');
    });
}
