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
      printIdea(data);
    },
    error: function() {
      alert("Invalid Idea");
    }
    })
    .done( function(){
      deleteIdea();
      qualityChange();
    })
  })
};
