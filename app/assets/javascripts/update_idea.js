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
  });
};
