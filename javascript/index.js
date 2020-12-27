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
sr.reveal("h2",{
    duration: 2000,
    origin: "left",
    distance: "-500px",
    rotate: {
        y: 180,
    },
    reset: true
});
sr.reveal("h1",{
    duration: 3000,
    origin: "right",
    distance: "-200px",
    reset: true
});
sr.reveal("p",{
    duration: 3000,
    origin: "left",
    distance: "-200px",
    reset: true
});
sr.reveal("figure",{
    duration: 2000,
    rotate: {
        y: 180,
    },
    reset: true
});
