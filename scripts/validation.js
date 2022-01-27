$("#inquiries").on("submit", function() {
  var formValid = true;
  console.log("submitted");


  // email
  if( $("#email").prop("validity").valid ) {
    $("#email-feedback").addClass("hidden");
  } else {
    $("#email-feedback").removeClass("hidden");
    formValid = false;
  }

  if( $("#name").val()) {
    $("#name-feedback").addClass("hidden");
  } else {
    $("#name-feedback").removeClass("hidden");
    formValid = false;
  }

  if( $('#category').val() ) { 
    $("#category-feedback").addClass("hidden");
  } else {
    $("#category-feedback").removeClass("hidden");
    formValid = false;
  }

  if( $('#message').val() ) { 
    $("#message-feedback").addClass("hidden");
  } else {
    $("#message-feedback").removeClass("hidden");
    formValid = false;
  }



  return formValid;
});