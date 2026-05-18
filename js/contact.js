emailjs.init("p5qUwKFFi1xXBM7nc");

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_rked9ho",
        "template_sugdbu4",
        this
    )
    .then(() => {
        alert("Message sent!");
        form.reset();
    })
    .catch((error) => {
        alert("Faild to send.");
        console.log(error);
    });
});