$(document).ready(function () {
    $(".next").click(function () {
        var tabId = $(this).attr("data-tab");
        $('#myTabs a[href="#' + tabId + '"]').tab("show");
    });

    $(".back").click(function () {
        var tabId = $(this).attr("data-tab");
        $('#myTabs a[href="#' + tabId + '"]').tab("show");
    });
});
