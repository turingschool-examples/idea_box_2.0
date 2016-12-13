var newIdeaTitle, newIdeaBody;

$(document).ready(function(){

  newIdeaTitle = $("#create-idea-title");
  newIdeaBody  = $("#create-idea-body");

  $("#create-idea-button").on('click', createIdea);
})


function createIdea (event){
  event.preventDefault();

  var idea = { idea: {
      title:  newIdeaTitle.val(),
      body: newIdeaBody.val()
    }
  }


  $.post("/api/v1/ideas", idea)
   .then( function(ideaData){
     //render the idea
     $("#ideas-list").html("<div class='idea'>" + ideaData.title + " "
                            + ideaData.body + "</div>" )
   })
 }
