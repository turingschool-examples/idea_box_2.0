$(function(){
newIdea();
deleteIdea();
qualityChange();
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
      $(".list-items").prepend("<div class='idea-container'>"
        +"<h5>"
        + data.title
        + ": "
        + "</h5><h6>"
        + data.body
        + "</h6><button class= 'btn btn-small red darken-3 delete-idea'"
        + " data-idea-id='"
        + data.id
        + "'>X</button></div>")
    })
    .done( function(){
      deleteIdea();
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
  });
};


var qualityChange = function(){
  $(".upvote-idea").on("click", function(){
    var ideaId = {idea: {id: $(this).data("idea-id"), vote: "upvote"} }

    $.ajax({
      type: "PATCH",
      url: "/api/v1/idea/" + ideaId.id,
      dataType: "json",
      data: ideaId,
      success: function() {
        console.log("win")
        },
      error: function(failure) {
        }
      })
  });

  $(".downvote-idea").on("click", function(){
    var ideaId = {idea: {id: $(this).data("idea-id"), vote: "downvote"} }

    $.ajax({
      type: "PATCH",
      url: "/api/v1/idea/" + ideaId.id,
      dataType: "json",
      data: ideaId,
      success: function() {
        console.log("win")
        },
      error: function(failure) {
        }
      })
  })
}
