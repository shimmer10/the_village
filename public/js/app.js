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
var newPlaceCategory = $("#place-category")
var newPlaceName = $("#place-name");
var newPlacePhone = $("#place-phone");
var newPlaceStreet = $("#place-street");
var newPlaceCity = $("#place-city");
var newPlaceState = $("#place-state");
var newPlaceZip = $("#place-zipcode");
var newPlaceSummary = $("#place-summary");
var newPlaceServices = $("#place-services");
var newPlaceWebsite = $("#place-link");
var newRatingComment = $("#user-comment");

// OBJECTS
var myUser = {
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
                    default:
                        if (isNaN(parseInt(response))) {
                            alert(response);
                        } else {
                            // store username, email, isRegistered, and id.
                            localStorage.clear();
                            localStorage.setItem('userId', response);
                            localStorage.setItem('username', un);
                            localStorage.setItem('email', em);
                            localStorage.setItem('isRegistered', true);

                            // this is probably temporary until we decide how to handle the user
                            alert("Welcome to the Village: " + un);
                        }
                        break;
                }
            }
        );


    },

}

// Functions

// run this code when we load the page
$(function () {
    $('#review-table').DataTable();
    $('#places-table').DataTable();

    var $dropdownItem = $('.dropdown-item');

    //Creat eRandom Image for the Place page
    var imageNumber = Math.floor(Math.random() * 10) + 1;
    var image = $("<img>");
    image.addClass("place-img");
    image.attr("src", "/images/page_" + imageNumber + ".jpg");
    image.attr("alt", "Autism Awareness Image " + imageNumber);
    $("#place-image").append(image);

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

    /**
     * On-Click event to submit the new place
     * to the database
     */
    $("#place-submit").on("click", function (event) {
        event.preventDefault(); 

        var newPlace = {
            category: newPlaceCategory.val().trim(),
            place_name: newPlaceName.val().trim(),
            street_address: newPlaceStreet.val().trim(),
            city: newPlaceCity.val().trim(),
            jurisdiction: newPlaceState.val().trim(),
            zip_code: newPlaceZip.val().trim(),
            phone_number: newPlacePhone.val().trim(),
            summary: newPlaceSummary.val().trim(),
            services: newPlaceServices.val().trim(),
            external_link: newPlaceWebsite.val().trim()
        };

        // Send the Post request to village_db Places Table
        $.ajax("/place", {
            type: "POST",
            data: newPlace
        }).then(
            function () {
                console.log("created new place");
                // Reload the place to get the updated list
                location.reload();
            }
        )
    });

    /**
     * On-Click event to submit a new review 
     * to the database
     */
    $("#review-submit").on("click", function (event) {
        event.preventDefault();
        var newReview = {
            rating: parseInt($("input[name='rating']:checked").val()),
            comments: newRatingComment.val().trim(),
            PlaceId: $("#review-btn").val(),
            UserId: localStorage.getItem('userId')

        }

        // Send the post request to village_db Reviews Table
        $.ajax("/review", {
            type: "POST",
            data: newReview
        }).then(
            function () {
                console.log("created new review");
                // Reload the review to get updated list
                location.reload();
            }
        )
    });

    /**
     * On-Click event to grab place information
     * and open place page
     */
    $(".view-button").on("click", function (event) {
        var id = $(this).data("value")
        var route = "/place/" + id;
        window.location.href = route;
    })

    /**
     * On-Click event to delete a row from the table
     */
    $(".delete-button").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("value")
        $.ajax("/place/" + id, {
            type: "DELETE"
        }).then(
            function () {
                location.reload();
            }
        );
    })
});

