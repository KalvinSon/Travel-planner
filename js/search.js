$(document).ready(function () {
    var windowURL = window.location.search;
    const urlParams = new URLSearchParams(windowURL);
    alert(urlParams);
    var country = urlParams.get("countryCode");
    var city = urlParams.get("city");
    var startFrom = urlParams.get("priceFrom");
    var endFrom = urlParams.get("priceTo");
    var dateFrom = urlParams.get("startDateTime");
    var dateTo = urlParams.get("endDateTime");
    console.log(country);
    console.log(city);
    console.log(startFrom);
    console.log(endFrom);
    console.log(dateFrom);
    console.log(dateTo);

    $("#search-button").click(function (e){
        e.stopPropagation();
        e.preventDefault();
        window.location.href = "./search.html?";
    });
});