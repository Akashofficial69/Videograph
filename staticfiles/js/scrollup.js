$(document).ready(function () {
    // Smooth scroll to the top when the "scrollup" button is clicked
    $(".scrollup").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800); // Adjust the duration (in milliseconds) for smooth scrolling
        return false;
    });
});