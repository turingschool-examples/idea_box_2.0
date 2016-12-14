var newIdeaTitle, newIdeaBody;

$(document).ready(function(){

  newIdeaTitle = $("#create-idea-title");
  newIdeaBody  = $("#create-idea-body");

  $("#create-idea-button").on('click', createIdea);
})

function clearIdea() {
  newIdeaTitle.val("");
  newIdeaBody.val("");
}

function displayFailure(failureData){
  console.log(failureData);
}

function createIdea (event){
  event.preventDefault();

  var idea = { idea: {
      title:  newIdeaTitle.val(),
      body: newIdeaBody.val()
    }
  }

  $.post("/api/v1/ideas", idea)
   .then( renderIdea )
   .then( clearIdea )
   .fail( displayFailure )
 }
