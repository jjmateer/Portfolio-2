$("#topPointerBtn").on('click', function () {
    $('body').animate({
        scrollTop: $("#topBar").offset().top
    },
        1000);
});
$("#projectScroll" ).on('click', function () {
    $('body').animate({
        scrollTop: $("#projectsHeader").offset().top
    },
        1000);
});
$("#contactScroll").on('click', function () {
    $('body').animate({
        scrollTop: $("#contactCont").offset().top
    },
        1000);
});
$("#resourceScroll").on('click', function () {
    $('body').animate({
        scrollTop: $("#resourcesCont").offset().top
    },
        1000);
});
$("#projectScrollSM" ).on('click', function () {
    $('body').animate({
        scrollTop: $(".regularCont").offset().top
    },
        1000);
            document.getElementById("navMenuSM").style.display = "none";
});
$("#contactScrollSM").on('click', function () {
    $('body').animate({
        scrollTop: $("#contactCont").offset().top
    },
        1000);
            document.getElementById("navMenuSM").style.display = "none";
});
$("#resourceScrollSM").on('click', function () {
    $('body').animate({
        scrollTop: $("#resourcesCont").offset().top
    },
        1000);
            document.getElementById("navMenuSM").style.display = "none";
});
$("#contactForm").on("submit", function () {
    event.preventDefault();
    $.post("/send", {
        type: "POST",
        name: $("#name")
            .val()
            .trim(),
        email: $("#email")
            .val()
            .trim(),
        message: $("#message")
            .val()
            .trim()
    }).then(function () {
        $("#name").val(' ')
        $("#email").val(' ')
        $("#message").val(' ')
    });
});
const glideConfig = {
    type: "carousel",
    perView: 3,
    breakpoints: {
        1025: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
};
new Glide('.glide', glideConfig).mount()

$("#navMenu").on("click", function() {
    document.getElementById("navMenuSM").style.display = "block";
})
function closeNav() {
    document.getElementById("navMenuSM").style.display = "none";
}

