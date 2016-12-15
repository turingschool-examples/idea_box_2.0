
function attachDeleteEvent(){
  $(".delete-idea").on("click", deleteIdea)
}

function deleteIdea(){

  var id = $(this).parent().data("id");

  $.ajax({
    url: `/api/v1/ideas/${id}`,
    method: 'delete',
    type: 'json',
  }).then(removeIdea.bind(this))
}


function removeIdea(){
  $(this).closest(".idea").remove()
}
