var printIdea = function(data) {
  $("#title").val("");
  $("#body").val("");
  $(".list-items").prepend("<div class='idea-container buttons col s12'>"
    + "<h6 class='quality'>swill</h6>"
    + "<h5>"
    + data.title
    + "</h5><p>"
    + data.body
    + "</p>"
    + "<button class= 'btn btn-small green darken-3 upvote-idea' data-idea-id='"
    + data.id
    + "' data-quality-id='"
    + data.quality_id
    + "'>upvote</button>"
    + "<button class= 'btn btn-small yellow darken-3 downvote-idea' data-idea-id='"
    + data.id
    + "' data-quality-id='"
    + data.quality_id
    + "'>downvote</button>"
    + "<button class= 'btn btn-small red darken-3 delete-idea'"
    + "data-idea-id='"
    + data.id
    + "'>delete</button>"
    + "<a href='/idea/"
    + data.id
    + "/edit' class= 'btn btn-small grey lighten-1 edit-idea'"
    + "data-idea-id="
    + data.id
    + "'>edit</a>"
    + "</div>")
}
