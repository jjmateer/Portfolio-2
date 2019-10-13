$("#projectScroll").on('click', function () {
    $('body').animate({
        scrollTop: $("#projectsCont").offset().top
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
$("#TSNInfo").on("click", function () {
    $("#TSNI.projectDesc").show();
})
$("#EDBInfo").on("click", function () {
    $("#EDBI.projectDesc").show();
})
$("#GSInfo").on("click", function () {
    $("#GSI.projectDesc").show();
})
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
        $("#name").val('')
        $("#email").val('')
        $("#message").val('')
    });
})
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
AOS.init();