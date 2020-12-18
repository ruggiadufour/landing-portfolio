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
sr.reveal("figure",{
    duration: 2000,
    rotate: {
        y: 180,
    },
    reset: true
});
