$(function(){
newIdea();
deleteIdea();
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


var deleteIdea = function() {
  $(".delete-idea").on("click", function()  {
    var ideaId = {id: $(this).data("idea-id")}
    $(this).parent().remove();
    $.ajax({
      method: "DELETE",
      url: "/api/v1/idea/" + ideaId.id,
      dataType: "json",
      data: ideaId,
      success: function() {
        },
      error: function(failure) {
        }
      })
  })

}
