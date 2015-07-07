$(function(){

});


$(".idea-submit").bind("click", function() {
  $.ajax({
    url: "/ideas/new",
    method: "post",
    dataType: "json",
    success: function(){
      console.log("win")
    },
  })
})
