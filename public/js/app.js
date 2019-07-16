/********************************
* The Village
*
* This file is used to handle javascript
* in support of HTML
*
* @author The Village People
*
* 2019-07-13
********************************/
// VARIABLES


// OBJECTS
var myUser = {
    username: "",
    email: "",
    isRegistered: false,

    responseOk: 'ok',
    responseAlreadyRegistered: "already registered",
    responseDuplicateEmail: "duplicate email",

    register: function (un, em) {


        // validate (todo)

        // send post request to server

        var data = {
            username: un,
            email: em,
        }
        $.ajax("/user", {
            type: "POST",
            data: data,
            context: this,
        }).then(
            function (response) {
                switch (response) {
                    case this.responseDuplicateEmail:
                        alert("This email " + em + " is already in use by another user. Please try again");
                        break;
                    case this.responseOk:
                    case this.responseAlreadyRegistered:
                        // store for now
                        this.username = un;
                        this.email = em;
                        this.isRegistered = true;
                        // this is probably temporary until we decide how to handle the user
                        alert("Welcome to the Village: " + un);
                        break;
                    default:
                        alert(response);
                        break;
                }
            }
        );


    },

}

// Functions

// run this code when we load the page
$(function () {
    var $dropdownItem = $('.dropdown-item');

    $dropdownItem.on('click', function () {
        console.log($(this).attr('data-id'))
    });

    /**
     * On-Click event to bring up modal to add 
     * Place Information
     */
    $("#add-btn").on("click", function (event) {
        event.preventDefault();
        $("#place-modal").modal();
    });

    /**
     * On-Click event to bring up modal to add 
     * Review Information
     */
    $("#review-btn").on("click", function (event) {
        event.preventDefault();
        $("#review-modal").modal();
    });

    /**
     * On-Click event to submit username and password
     * Login/Register Information
     */
    $("#registration-submit-btn").on("click", function (event) {
        event.preventDefault();
        // this makes the dropdown go away
        $("#navbardrop").dropdown("toggle");

        // grab username and email
        var username = $("#dropdownFormUserName").val();
        var email = $("#dropdownFormEmail").val().toUpperCase();

        // empty the input forms
        $("#dropdownFormUserName").val("");
        $("#dropdownFormEmail").val("");

        myUser.register(username, email);
    });
});

