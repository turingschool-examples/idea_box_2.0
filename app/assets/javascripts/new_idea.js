$(function(){
newIdea();
});

var newIdea = function() {
$(".job-save").on("click", function() {
  var jobTitle = $("#title").val();
  var jobBody = $("#body").val();
  var ideaParams = { idea: {title: jobTitle,  body: jobBody } }
  $.ajax({
    method: "POST",
    url: "/api/v1/idea/",
    dataType: "json",
    data: ideaParams,
    success: function(data) {
      console.log(data)
      },
    error: function(failure) {
      console.log(failure);
      }
    })
    .done( function(data){
      $("#title").val("");
      $("#body").val("");
      $(".list-items").prepend(
        "<h5>"
        + data.title
        + ": "
        + "</h5><h6>"
        + data.body
        + "</h6><button class= 'btn btn-small red darken-3 delete-idea'"
        + " data-idea-id='"
        + data.id
        + "'>X</button>")
    })
  })

};
