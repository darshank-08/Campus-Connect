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

$(".toggle-password").click(function() {
  const passwordField = $(this).siblings(".password");
  const icon = $(this).find(".icon");

  if (passwordField.attr("type") === "password") { // if password is hidden
    passwordField.attr("type", "text");
    icon.attr("src", "./assets/eye-off-svgrepo-com.svg"); // change to closed-eye
    icon.attr("alt", "Hide Password");
  } else { // if password is visible
    passwordField.attr("type", "password");
    icon.attr("src", "./assets/eye-svgrepo-com.svg"); // change back to open-eye
    icon.attr("alt", "Show Password");
  }
});
