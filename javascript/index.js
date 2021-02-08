//Events--------------------------------------------------------------------------------------------
function copyEmail() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    //Show the notification element
    var notif = document.getElementById("Notification");
    notif.style.display = "flex"
}
function closeNotif(){
    //Close the notification element
    var notif = document.getElementById("Notification");
    notif.style.display = "none"
}

//Scrollreveal-------------------------------------------------------------------------------------
window.sr = ScrollReveal();

sr.reveal(".navbar",{
    duration: 3000
});
sr.reveal("#about,#knowledge,#portfolio,#contact",{
    duration: 2000,
    origin: "top",
    distance: "150px",
    reset: true
});
// sr.reveal("h1",{
//     duration: 2000,
//     origin: "left",
//     distance: "-500px",
//     rotate: {
//         y: 180,
//     },
//     reset: true
// });
sr.reveal("figure",{
    duration: 2000,
    rotate: {
        y: 180,
    },
    reset: true
});


//Gear scroll-rotation-------------------------------------------------------------------------------------

window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);
