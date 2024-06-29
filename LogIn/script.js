$(document).ready(function() {
    $("#emailHelpId").hide();
    $("#nameHelpId").hide();
    $("#passwordHelpId").hide();

    $("#fname").keyup(function() {
        validateName();
    });

    $("#email").keyup(function() {
        validateEmail();
    });

    $("#password").keyup(function() {
        validatePassword();
    });

    function validateEmail() {
        let emailValue = $("#email").val();
        if(emailValue.length == " ") {
            $("#emailHelpId").show();
            $("#email").css("border-color", "red");
            return false;
        }else {
            $("#emailHelpId").hide();
            $("#email").css("border-color", "none");
            return true;
        }
    }

    function validateName() {
        let nameValue = $("#fname").val();
        if(nameValue.length == " ") {
            $("#nameHelpId").show();
            $("#fname").css("border-color", "red");
            return false;
        }else {
            $("#nameHelpId").hide();
            $("#fname").css("border-color", "none");
            return true;
        }
    }

    function validatePassword() {
        let passwordValue = $("#password").val();

        if(passwordValue.length == " ") {
            $("#passwordHelpId").show();
            $("#password").css("border-color", "red");
            return false;
        }else {
            $("#passwordHelpId").hide();
            $("#password").css("border-color", "grey");
            return true;
        }
    }

    $("#submit").click(function (e) {
        const validEmail = validateEmail();
        const validName = validateName();
        const validPassword = validatePassword();

        if(!validName || !validPassword || !validEmail) {
            e.preventDefault();
        }
    })
});ber
