$("#topPointerBtn").on('click', function () {
    $('body').animate({
        scrollTop: $("#topBar").offset().top
    },
        1500);
});
$("#projectScroll").on('click', function () {
    $('body').animate({
        scrollTop: $("#projectsHeader").offset().top-250
    },
        1000);
});
$("#contactScroll").on('click', function () {
    $('body').animate({
        scrollTop: $("#contactCont").offset().top
    },
        1500);
});
$("#resourceScroll").on('click', function () {
    $('body').animate({
        scrollTop: $("#resourcesCont").offset().top
    },
        2000);
});