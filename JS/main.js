// ==================================================================================
$('.sideNav i').click(function(){
    $('.sideNav').css('left',0)

})

$('.closebtn').click(function(){
  const left = $('.sideNav_Inner').innerWidth()

    $('.sideNav').css('left',-left)
})
// =====================================================================================
$('a[href^="#"]').click(function(eventInfo){
const sectiontop =$(eventInfo.target.getAttribute('href')).offset().top
$('html , body').animate({'scrollTop':sectiontop},300)
})
// =====================================================================================
$('#sliderDown .singer').click(function(){
  $('.Details').not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

// =====================================================================================
window.onload = function() {



countdown("10 October 2024 9:56:00");
}
function countdown(dateString) {
  var targetDate = new Date(dateString).getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = targetDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".mins").html(`${minutes} m`);
    $(".sec").html(`${seconds} s`);

  }, 1000);
}
// ===========================================================================================
$("#textarea").on("keyup", function() {
  if(100-this.value.length<=0){
    $("#Charcount").text("your available character finished")
  }else{
    $("#Charcount").text(100-this.value.length);

  }
});