// navbar //
$(".toggle").click(function () {
    $(".nav-bar").toggle(1000)
})
$(".close").click(function () {
    $(".nav-bar").hide(1000)
})
// modal //
$(".singers h3").click((e) => {
    $(".singers div").not($(e.target).next()).slideUp(500)
    $($(e.target).next()).slideToggle(500)
})
// max char //
$("textarea").keyup(function () {
    if ($("textarea").val().length == 100) {
        $(".alert").html(`<span class="text-danger fs-5 mb-4" id="char">max 100 char</span>`)
    } else {
        $(".alert").html(`<span class="text-danger fs-5 mb-4" id="char">${100 - $("textarea").val().length}</span>character remaining`)

    }
})
var eventDate = new Date("dec 5, 2023 15:37:25").getTime();
var getDate = setInterval(function () {
    var currentDate = new Date().getTime();
    var distance = eventDate - currentDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".day").text(`${days}day`)
    $(".hour").text(`${hours}hour`)
    $(".min").text(`${minutes}min`)
    $(".sec").text(`${seconds}sec`)
    if (distance < 0) {
        clearInterval(getDate);
        document.getElementById("date").innerHTML = "Time Out";
    }

}, 1000);


let singersSec=$(".color").offset().top

$(window).scroll(function(){
    let windowScroll=$(window).scrollTop()
    if(windowScroll>singersSec){
        $(" .side-bar  .open").css("color", "black")
    }else{
        $(" .side-bar  .open").css("color", "white")

    }
})
