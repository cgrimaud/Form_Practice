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
    $("form[name='helpDeskTicket']").validate({
      rules: {
        userName: {
            required: true,
            minlength: 3
        },        
        userEmail: {
          required: true,
          email: true
        },
        userId: {
            required: true,
            minlength: 4
        },  
      },
      messages: {
        userName: "You must enter your name (minimum 3 characters)",
        userEmail: "Please provide a valid email address",
        userId: "You must enter your USI User ID",
      },
      submitHandler: function(form) {
        console.log(form);
        form.submit();
      }
    });
  });

  $("form").kendoValidator({
    rules: {
        radio: function(input) {
            if (input.filter("[type=radio]") && input.attr("required")) {        
                return $("form").find("[name=" + input.attr("name") + "]").is(":checked");
            }
            return true;
        }
    },
    messages: {
        radio: "Select one of the options"
    }
});
