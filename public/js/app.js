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
$(function () {  
    /**
     * On-Click event to bring up modal to add 
     * Place Information
     */
    $("#add-btn").on("click", function (event) {
        event.preventDefault();

        $("#place-modal").modal();

    });
});