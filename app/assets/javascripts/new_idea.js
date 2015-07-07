$(function(){
newIdea();
});

var newIdea = function() {
$(".job-save").on("click", function() {
  var jobTitle = $(".title").val();
  var jobBody = $(".body").val();

  $.ajax({
    method: "POST",
    url: "/api/v1/idea",
    dataType: "json",
    data: { title: jobTitle,  body: jobBody },
    success: function() {
      console.log("win")
    },
    error: function() {
      console.log("losing");
    }

  })

});
};
