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
        alert("Invalid Idea");
        }
      })
  });
};
