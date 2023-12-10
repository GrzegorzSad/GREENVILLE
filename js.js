$(document).ready(function () {
    $('input[type="radio"]').click(function () {
        if ($(this).attr("id") == "flexRadioDefault1") {
            $("#clickAndCollectContent").removeClass("d-none");
            $("#officeCateringContent").addClass("d-none");
        }
        if ($(this).attr("id") == "flexRadioDefault2") {
            $("#officeCateringContent").removeClass("d-none");
            $("#clickAndCollectContent").addClass("d-none");
        }
    });
});
