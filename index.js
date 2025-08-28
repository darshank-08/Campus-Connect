let currentPage = 0;
const pages = $(".page");

function showPage(index) {
  pages.hide();
  $(pages[index]).css("display", "flex");
}

// prev button
$(".prev-btn").on("click touchstart", function(e){ // avoid double trigger
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// next button
$(".next-btn").on("click touchstart", function(e){
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// show first page initially
showPage(currentPage);


// for login page
// for login page
$(".login-form .panel").hide();
$(".navbar .student").addClass("active");
$("#student-panel").show();

$(".navbar button").click(function(){
  let curruntbtn = $(this).attr("class").split(" ")[0]; // only first class (student/teacher/admin)
  console.log(curruntbtn);

  $(".navbar button").removeClass("active");
  $(this).addClass("active"); // ✅ use clicked element

  $(".login-form .panel").hide();
  $("#" + curruntbtn + "-panel").show();
  console.log("#" + curruntbtn + "-panel");
});
