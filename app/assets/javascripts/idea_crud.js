$(function(){
newIdea();
deleteIdea();
qualityChange();
filterIdeas();
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
        + "<h6 class='quality'>swill</h6>"
        + "<h5>"
        + data.title
        + ": "
        + "</h5><h6>"
        + data.body
        + "</h6>"
        + "<button class= 'btn btn-small green darken-3 upvote-idea' data-idea-id='"
        + data.id
        + "' data-quality-id='"
        + data.quality_id
        + "'>^</button>"
        + "<button class= 'btn btn-small yellow darken-3 downvote-idea' data-idea-id='"
        + data.id
        + "' data-quality-id='"
        + data.quality_id
        + "'>v</button>"
        + "<button class= 'btn btn-small red darken-3 delete-idea'"
        + "data-idea-id='"
        + data.id
        + "'>X</button>"
        + "<button class= 'btn btn-small grey lighten-1 edit-idea'"
        + "data-idea-id='"
        + data.id
        + "'>edit</button>"
        + "</div>")
    })
    .done( function(){
      deleteIdea();
      qualityChange();
      editIdea();
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
    var ideaQuality = $(this).siblings().first()

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
      .done(function(){
        if (ideaQuality.text() === "swill") {
          $(ideaQuality).html("plausible")
        } else {
          $(ideaQuality).html("genius")
        }
      })
  });

  $(".downvote-idea").on("click", function(){
    var ideaId = {idea: {id: $(this).data("idea-id"), vote: "downvote"} }
    var ideaQuality = $(this).siblings().first()

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
      .done(function(){
        if (ideaQuality.text() === "genius") {
          $(ideaQuality).html("plausible")
        } else {
          $(ideaQuality).html("swill")
        }
      })
  })
}

var editIdea = function(){
  $.ajax({
    type: "PATCH"

  })
}
