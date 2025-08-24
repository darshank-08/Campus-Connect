 let currentPage = 0;
    const pages = $(".page");

    function showPage(index) {
      pages.hide();
      $(pages[index]).css("display", "flex");
    }

    $(".prev-btn").click(function(){
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
      }
    })

    $(".next-btn").click(function(){
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
      }
    })

    // show first page initially
    showPage(currentPage);