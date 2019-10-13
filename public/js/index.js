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