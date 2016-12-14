$(document).ready( function(){
  addIdeas();
});

function addIdeas(){
  $.getJSON("/api/v1/ideas")
  .then(function(allIdeas){
    allIdeas.forEach( renderIdea );
  })
  .then(attachDeleteEvent)
  .fail( displayFailure )
}


function renderIdea(idea){
  $("#ideas-list").append(`<div class='idea'>
                            <p>${ idea.title.toUpperCase() }</p>
                            <p>${ idea.body }</p>
                            <p>${ idea.quality }
                              <button class='delete-idea'>Delete</button>
                            </p>
                          </div>` )

}
