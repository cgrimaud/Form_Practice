$(".new-user").hide();
$(".dup-user").hide();
$(".sys-issue").hide();

// If #new-user radio button selected, show .new-user section & hide .usi-issue
    // if Yes selected #copy-user drop down, show .dup-user
// If #usi-issue radio button selected, show .usi-issue section & hide .new-user

$(document).ready(function(){
    $(".new input:radio").click(function(){
        $(".new-user").show();
        $(".sys-issue").hide();
    })
        $("#copy-user").on('change',function(){
            if($("#copy-user").val() === "yes")
                $(".dup-user").show();
            else
                $(".dup-user").hide();
        })

    $(".issue input:radio").click(function(){
        $(".new-user").hide();
        $(".sys-issue").show();

    })
})

