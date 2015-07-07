var filterIdeas = function(){
  $("#search-bar").on("keyup", function(){
    var filter = $(this).val();

    $(".list-items").children().each(function(){
      if ($(this).text().search(new RegExp(filter, "i")) === -1) {
        $(this).addClass("hidden")
      }
        else {
          $(this).removeClass("hidden")
        }
    })
  })

}
