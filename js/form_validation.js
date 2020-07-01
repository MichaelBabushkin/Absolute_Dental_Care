var Contact = (function () {

    var reg, the_value, the_id;

    function validation() { //Validation hints:
        $("input").blur(function () {
            reg = new RegExp($(this).attr("pattern"));
            the_value = $(this).val();
            the_id = $(this).attr("id");

            if (reg.test(the_value)) {

                $(this).css({
                    "box-shadow": "1px 1px 2px green"
                });
                $("#" + the_id + "_error").css({
                    color: "transparent"
                });

            } else {

                $(this).css({
                    "box-shadow": "1px 1px 2px red"
                });

                if (the_id == "tel") {
                    $("#" + the_id + "_error").css({
                        color: "red"
                    }).html("Please, enter a valid phone number");
                } else {
                    $("#" + the_id + "_error").css({
                        color: "red"
                    }).html("Please, enter a valid " + the_id);
                }
            }

        });
        $("input").focus(function () {
            $(this).css("box-shadow", "none");
            $("#" + the_id + "_error").css({
                color: "transparent"
            });

        });
    }

    function processing() {

        $("form").on("submit", function () {

            var name = $('#name').val(),
                email = $('#email').val(),
                tel = $('#tel').val(),
                message = $('#message').val();
                

            if (name && email && tel && reg.test(the_value)) {

                $('form').slideUp();

               
                $('#msg').fadeIn()
                    .delay(5000)
                    .fadeOut()
                    .empty();

                    
                //following code is used here instead of the $.post function 
                //and should be deleted if you are using it,
                //just inserted this for presentation since GH hosting doesn't support php
                // $("#msg").append('<h3 class="pt-1">Thank you, ' + name +  '. The message was successfully sent.</h3><hr>');


                $('form').delay(5000).slideDown();
                $('#name').val('');
                $('#email').val('');
                $('#tel').val('');
                $('#message').val('');
                $("input").css("box-shadow", "none");
            }

            $.post("contact_form.php", {
                    name: name,
                    email: email,
                    tel: tel,
                    message: message
                },
                function (data) {

               $("#msg").append("<p>" + data + "</p>");


                });
            return false;

        });

    }

    function init() {
        validation();
        processing();
    }
    return {
        init: init
    };
})();

$(document).ready(function() {
      
      Contact.init();
  });