let currentPage = 0;
const pages = $(".page");

function showPage(index) {
  pages.hide();
  $(pages[index]).css("display", "flex");
}

// prev button
$(".prev-btn").on("click touchstart", function(e){
  e.preventDefault(); // avoid double trigger
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// next button
$(".next-btn").on("click touchstart", function(e){
  e.preventDefault();
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// show first page initially
showPage(currentPage);
