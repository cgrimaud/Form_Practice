$(".newUser").hide();
$(".dupUser").hide();
$(".sysIssue").hide();

// If #new-user radio button selected, show .new-user section & hide .usi-issue
    // if Yes selected #copy-user drop down, show .dup-user
// If #usi-issue radio button selected, show .usi-issue section & hide .new-user

$(document).ready(function(){
    $(".new input:radio").click(function(){
        $(".newUser").show();
        $(".sysIssue").hide();
    })
        $("#copyUser").on('change',function(){
            if($("#copyUser").val() === "yes")
                $(".dupUser").show();
            else
                $(".dupUser").hide();
        })

    $(".issue input:radio").click(function(){
        $(".newUser").hide();
        $(".sysIssue").show();

    })

    
})


// Form Validaiton 

$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='helpDeskTicket']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        userName: {
            required: true,
            minlength: 3
        },        
        userEmail: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        userId: {
            required: true,
            minlength: 4
        },   
      },
      // Specify validation error messages
      messages: {
        userName: "You must enter your name (minimum 3 characters)",
        userEmail: "Please provide a valid email address",
        userId: "You must enter your USI User ID"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        console.log(form);
        form.submit();
      }
    });
  });
