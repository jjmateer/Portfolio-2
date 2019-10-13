$("#topPointerBtn").on('click', function () {
    $('body').animate({
        scrollTop: $("#topBar").offset().top
    },
        1000);
});
$("#projectScroll, #projectScrollSM").on('click', function () {
    document.getElementById("navMenuSM").style.display = "none";
    $('body').animate({
        scrollTop: $("#projectsHeader").offset().top
    },
        1000);
});
$("#contactScroll, #contactScrollSM").on('click', function () {
    document.getElementById("navMenuSM").style.display = "none";
    $('body').animate({
        scrollTop: $("#contactCont").offset().top
    },
        1000);
});
$("#resourceScroll, #resourceScrollSM").on('click', function () {
    document.getElementById("navMenuSM").style.display = "none";
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