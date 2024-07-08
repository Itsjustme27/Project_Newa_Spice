$(document).ready(function () {
    $("#nameHelpId").hide();
    $("#emailHelpId").hide();
    $("#passwordHelpId").hide();
    $("#confirmHelpId").hide();
    $("#matchHelpId").hide();

    $("#fname").keyup(function() {
        validateName();
    });

    $("#email").keyup(function() {
        validateEmail();
    });

    $("#password").keyup(function() {
        validatePassword();
    });

    $("#cpassword").keyup(function() {
        validateCPassword();
        validateMatchPassword();
    });

    function validateEmail() {
        let emailValue = $("#email").val();
        if(emailValue.length == " ") {
            $("#emailHelpId").show();
            $("#emailLabel").css("color", "red");
            $("#emailHelpId").css("color", "red");
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
            $("#nameLabel").css("color", "red");
            $("#nameHelpId").css("color", "red");
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
            $("#passwordLabel").css("color", "red");
            $("#passwordHelpId").css("color", "red");
            $("#password").css("border-color", "red");
            return false;
        }else {
            $("#passwordHelpId").hide();
            $("#password").css("border-color", "grey");
            return true;
        }
    }

    function validateCPassword() {
        let cpasswordValue = $("#cpassword").val();

        if(cpasswordValue.length == " ") {
            $("#confirmHelpId").show();
            $("#cpassword").css("color", "red");
            $("#confirmHelpId").css("color", "red");
            $("#cpassword").css("border-color", "red");
            return false;
        }else {
            $("#confirmHelpId").hide();
            $("#cpassword").css("border-color", "none");
        }
    }

    function validateMatchPassword() {
        let passwordValue = $("#password").val();
        let cpasswordValue = $("#cpassword").val();
        if(passwordValue === cpasswordValue) {
            $("#matchHelpId").hide();
            return true;
        } else {
            $("#matchHelpId").show();
            $("#matchHelpId").css("color", "red");
            $("#cpassword").css("border-color", "red");
            $("cpasswordLabel").css("color", "red");
        }
    }


    $("#submit").click(function (e) {
        const validEmail = validateEmail();
        const validName = validateName();
        const validPassword = validatePassword();
        const validCPassword = validateCPassword();

        const validMatchPassword = validateMatchPassword();
        if(!validName || !validPassword || !validEmail || !validCPassword || !validMatchPassword) {
            e.preventDefault();
        }
    })
});