$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
    $("#countryText").val("");
    $("#cityText").val("");
    $("#end-date").val("");
    $("#start-date").val("");
    //List of Countries with ISO code
    var isoCountries = {
        afghanistan: "AF",
        "aland islands": "AX",
        albania: "AL",
        algeria: "DZ",
        "american samoa": "AS",
        andorra: "AD",
        angola: "AO",
        anguilla: "AI",
        antarctica: "AQ",
        "antigua and barbuda": "AG",
        america: "US",
        argentina: "AR",
        armenia: "AM",
        aruba: "AW",
        australia: "AU",
        austria: "AT",
        azerbaijan: "AZ",
        bahamas: "BS",
        bahrain: "BH",
        bangladesh: "BD",
        barbados: "BB",
        belarus: "BY",
        belgium: "BE",
        belize: "BZ",
        benin: "BJ",
        bermuda: "BM",
        bhutan: "BT",
        bolivia: "BO",
        "bosnia and herzegovina": "BA",
        botswana: "BW",
        "bouvet island": "BV",
        brazil: "BR",
        "british indian ocean territory": "IO",
        "brunei darussalam": "BN",
        bulgaria: "BG",
        "burkina faso": "BF",
        burundi: "BI",
        cambodia: "KH",
        cameroon: "CM",
        canada: "CA",
        "cape verde": "CV",
        "cayman islands": "KY",
        "central african republic": "CF",
        chad: "TD",
        chile: "CL",
        china: "CN",
        "christmas island": "CX",
        "cocos (keeling) islands": "CC",
        colombia: "CO",
        comoros: "KM",
        congo: "CG",
        "congo, democratic republic": "CD",
        "cook islands": "CK",
        "costa rica": "CR",
        "cote d'ivoire": "CI",
        croatia: "HR",
        cuba: "CU",
        cyprus: "CY",
        "czech republic": "CZ",
        denmark: "DK",
        djibouti: "DJ",
        dominica: "DM",
        "dominican republic": "DO",
        ecuador: "EC",
        egypt: "EG",
        "el salvador": "SV",
        "equatorial guinea": "GQ",
        eritrea: "ER",
        estonia: "EE",
        ethiopia: "ET",
        "falkland islands": "FK",
        "faroe islands": "FO",
        fiji: "FJ",
        finland: "FI",
        france: "FR",
        "french guiana": "GF",
        "french polynesia": "PF",
        "french southern territories": "TF",
        gabon: "GA",
        gambia: "GM",
        georgia: "GE",
        germany: "DE",
        ghana: "GH",
        gibraltar: "GI",
        greece: "GR",
        greenland: "GL",
        grenada: "GD",
        guadeloupe: "GP",
        guam: "GU",
        guatemala: "GT",
        guernsey: "GG",
        guinea: "GN",
        "guinea-bissau": "GW",
        guyana: "GY",
        haiti: "HT",
        "heard island & mcdonald islands": "HM",
        "holy see (vatican city state)": "VA",
        honduras: "HN",
        "hong kong": "HK",
        hungary: "HU",
        iceland: "IS",
        india: "IN",
        indonesia: "ID",
        "iran, islamic republic of": "IR",
        iraq: "IQ",
        ireland: "IE",
        "isle of man": "IM",
        israel: "IL",
        italy: "IT",
        jamaica: "JM",
        japan: "JP",
        jersey: "JE",
        jordan: "JO",
        kazakhstan: "KZ",
        kenya: "KE",
        kiribati: "KI",
        "republic of korea": "KR",
        "south korea": "KR",
        "democratic people's republic of korea": "KP",
        "north korea": "KP",
        kuwait: "KW",
        kyrgyzstan: "KG",
        "lao people's democratic republic": "LA",
        latvia: "LV",
        lebanon: "LB",
        lesotho: "LS",
        liberia: "LR",
        "libyan arab jamahiriya": "LY",
        liechtenstein: "LI",
        lithuania: "LT",
        luxembourg: "LU",
        macao: "MO",
        macedonia: "MK",
        madagascar: "MG",
        malawi: "MW",
        malaysia: "MY",
        maldives: "MV",
        mali: "ML",
        malta: "MT",
        "marshall islands": "MH",
        martinique: "MQ",
        mauritania: "MR",
        mauritius: "MU",
        mayotte: "YT",
        mexico: "MX",
        "micronesia, federated states of": "FM",
        moldova: "MD",
        monaco: "MC",
        mongolia: "MN",
        montenegro: "ME",
        montserrat: "MS",
        morocco: "MA",
        mozambique: "MZ",
        myanmar: "MM",
        namibia: "NA",
        nauru: "NR",
        nepal: "NP",
        netherlands: "NL",
        "netherlands antilles": "AN",
        "new caledonia": "NC",
        "new zealand": "NZ",
        nicaragua: "NI",
        niger: "NE",
        nigeria: "NG",
        niue: "NU",
        "norfolk island": "NF",
        "northern mariana islands": "MP",
        norway: "NO",
        oman: "OM",
        pakistan: "PK",
        palau: "PW",
        "palestinian territory, occupied": "PS",
        panama: "PA",
        "papua new guinea": "PG",
        paraguay: "PY",
        peru: "PE",
        philippines: "PH",
        pitcairn: "PN",
        poland: "PL",
        portugal: "PT",
        "puerto rico": "PR",
        qatar: "QA",
        reunion: "RE",
        romania: "RO",
        "russian federation": "RU",
        rwanda: "RW",
        "saint barthelemy": "BL",
        "saint helena": "SH",
        "saint kitts and nevis": "KN",
        "saint lucia": "LC",
        "saint martin": "MF",
        "saint pierre and miquelon": "PM",
        "saint vincent and grenadines": "VC",
        samoa: "WS",
        "san marino": "SM",
        "sao tome and principe": "ST",
        "saudi arabia": "SA",
        senegal: "SN",
        serbia: "RS",
        seychelles: "SC",
        "sierra leone": "SL",
        singapore: "SG",
        slovakia: "SK",
        slovenia: "SI",
        "solomon islands": "SB",
        somalia: "SO",
        "south africa": "ZA",
        "south georgia and sandwich isl.": "GS",
        spain: "ES",
        "sri lanka": "LK",
        sudan: "SD",
        suriname: "SR",
        "svalbard and jan mayen": "SJ",
        swaziland: "SZ",
        sweden: "SE",
        switzerland: "CH",
        "syrian arab republic": "SY",
        taiwan: "TW",
        tajikistan: "TJ",
        tanzania: "TZ",
        thailand: "TH",
        "timor-leste": "TL",
        togo: "TG",
        tokelau: "TK",
        tonga: "TO",
        "trinidad and tobago": "TT",
        tunisia: "TN",
        turkey: "TR",
        turkmenistan: "TM",
        "turks and caicos islands": "TC",
        tuvalu: "TV",
        uganda: "UG",
        ukraine: "UA",
        "united arab emirates": "AE",
        "united kingdom": "GB",
        "united states": "US",
        "usa":"US",
        "united states of america":"US",
        "united states outlying islands": "UM",
        uruguay: "UY",
        uzbekistan: "UZ",
        vanuatu: "VU",
        venezuela: "VE",
        vietnam: "VN",
        "virgin islands, british": "VG",
        "virgin islands, u.s.": "VI",
        "wallis and futuna": "WF",
        "western sahara": "EH",
        yemen: "YE",
        zambia: "ZM",
        zimbabwe: "ZW"
    };
    const regionNames = new Intl.DisplayNames(
        ['en'], {type: 'region'}
      );
    var countryOrNot = true;
    var priceRangeOrNot = false;
    var DateOrNot = false;
    const countryBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&countryCode=";
    const cityBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&city=";
    const query = "&apikey=gUiVU8bG3ETIv2go0u9OVZAKqfmVvpBA";
    var search_button = $("#search-button");
    firstCheck();
// Activity list shows when page loads
function getParams() {
    // Gets the search parameters out of the URL
    // var searchParamsArray = document.location.search.split("&");
    var queryString = document.location.search;
    const urlParams = new URLSearchParams(queryString);
    // Query value
    var city = urlParams.get("city");
    console.log(city);
    var country = urlParams.get("countryCode");
    console.log(country);
    var priceFrom = urlParams.get("priceFrom");
    console.log(priceFrom);
    var priceTo = urlParams.get("priceTo");
    console.log(priceTo);
    var dateFrom = urlParams.get("startDateTime");
    console.log(dateFrom);
    searchApi(city,country,priceFrom,priceTo,dateFrom);

}

function fixTime(time){
    console.log(time);
    var dateTime = time.split("-");
    var year = dateTime[0];
    var month = dateTime[1];
    var day = dateTime[2];
    var time ="T00:00:00Z";
    if(month < 10){
        month = "0"+month;
    }
    if(day < 10){
        day = "0"+day;
    }
    return year+"-"+month+"-"+day+time;
}

function searchApi(city,country,priceFrom,priceTo,dateFrom) {
    var toGo = "";
    var countryQueryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?";
    if(city != null){
        toGo = city;
        countryQueryUrl += "city=" + city;
    }
    else{
        toGo = country;
        countryQueryUrl += "countryCode=" + country;
    }
    if(priceFrom != null){
        countryQueryUrl += "&priceFrom=" + priceFrom;
    }
    if(priceTo != null){
        countryQueryUrl += "&priceTo=" + priceTo;
    }
    if(dateFrom != null){  
        countryQueryUrl += "&startDateTime=" + fixTime(dateFrom);
    }

    countryQueryUrl += query;
    console.log(countryQueryUrl);


    fetch(countryQueryUrl)
        .then(function(response) {
            if(!response.ok) {
                throw response.json();
            }

            return response.json();
        })
        .then(function(data) {
            console.log(data, toGo);
            if (data._embedded == "" || data._embedded == null ) {
                var noResultsMessage = $("<p></p>").addClass("no-result-message").text("No events to list.");
                $("#activities-list").append(noResultsMessage);
            }
            else {
                console.log(data._embedded);
                for (var i = 0; i < data._embedded.events.length; i++) {
                    displayCountryEvents(data._embedded.events[i], toGo, i);
                }
            }
        })
        .catch(function(error) {
            console.log(error);
        })
}

function displayCountryEvents(events, toGo, index) {
    console.log(events);
    $("#country-selected").text(toGo);
    var activityCard = $("<div></div>").addClass("card card-content activity-card")
    var activityName = $("<p></p>").addClass("activity-title").text(events.name);
    var selectActivityButton = $("<a></a>").addClass("btn-floating halfway-fab waves-effect waves-light select-activity").html("<i class='material-icons'>add</i>");
    var selectActivityButtonID = "card"+index;
    selectActivityButton.attr("id",selectActivityButtonID);
    var activityDate = $("<p></p>").addClass("activity-info").attr("id", "activity-date").text("Date: " + events.dates.start.localDate);
    var activityCosts = !events.priceRanges ? $("<p></p>").addClass("activity-info").attr("id", "activity-cost").text("Cost: No cost listed. Check events website for cost information.") : $("<p></p>").addClass("activity-info").attr("id", "activity-cost").text("Cost: " + toGo + "$" + events.priceRanges[0].min + "- " + toGo + "$" + events.priceRanges[0].max);
    var activityLink = $("<a></a>").addClass("activity-info event-link").attr("href", events.url).attr("target", "_blank").text("Click here for more event information");
    activityCard.append(activityName, selectActivityButton, activityDate, activityCosts,activityLink);
    $("#activities-list").append(activityCard);
    selectActivityButton.click(function (e) { 
        e.preventDefault();
        e.stopPropagation();
        var itemList = localStorage.getItem("list");
        itemList = JSON.parse(itemList);
        var name = activityName.text();
        var cost = activityCosts.text();
        var date = activityDate.text();
        var link = activityLink.attr("href");

        if(itemList == null){
            $("#budget-mo").attr('href','budgetlist.html');
            $("#budget").attr('href','budgetlist.html');
            var list = new Array();
            list.push({"name":name,"cost":cost,"date":date,"url":link});
            localStorage.setItem("list",JSON.stringify(list));
        }
        else{
            itemList.push({"name":name,"cost":cost,"date":date,"url":link});
            localStorage.setItem("list",JSON.stringify(itemList));
        }
    });
}


// Form input functionality
    search_button.click(async function (e) { 
        e.preventDefault();
        e.stopPropagation();
        // if country is the search parameter
        if(countryOrNot){
            var search_text = $("#countryText").val();
            search_text = search_text.toLowerCase();
            var BadResult = getCountryName(search_text) == search_text ? true : false;
            if(!BadResult){
                // console.log(BadResult);
                await dataSearch(search_text);
            }
            else{
                $("#countryText").val("");
                $("#cityText").prop('disabled', false);
                console.log("pass1");
                var errorMessage = $("<p></p>").addClass("error-message").text("There are no search results for this. Please try again");
                $("#countrySearch").append(errorMessage);
                setTimeout(function () {
                    $(".error-message").remove();
                }, 2000);
            }
        }
        //if city is the search parameter
        else{
            var search_text = $("#cityText").val();
            search_text = search_text.toLowerCase();
            await dataSearch(search_text);
        }

        

    });
    //Check price from on change
    $("#priceFrom").change(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var priceFrom =  $("#priceFrom").val();
        if(priceFrom == "" && $("#priceTo").val() == ""){
            search_button.prop('disabled', false); 
            priceRangeOrNot = true;
        }
        else if(priceFrom == "" || priceFrom/1 == 0){
            search_button.prop('disabled', true);
            priceRangeOrNot = false;
        }
        else if(priceFrom !== ""){
            var priceTo =$("#priceTo").val();
            if($("#priceTo").val() == "" || parseInt(priceTo) <= parseInt(priceFrom)){
                search_button.prop('disabled', true);
                priceRangeOrNot = false;
            }
            else{
                search_button.prop('disabled', false); 
                priceRangeOrNot = true;
            }
        }
        
    });

    //Check price to on change
    $("#priceTo").change(function (e) { 
        e.preventDefault();
        e.stopPropagation();
        var priceTo =  $("#priceTo").val();
        if(priceTo == "" && $("#priceFrom").val() == ""){
            search_button.prop('disabled', false);
            priceRangeOrNot = true;
        }
        if(priceTo == "" || priceTo/1 == 0){
            search_button.prop('disabled', true);
            priceRangeOrNot = false;

        }
        else if(priceTo !== ""){
            if($("#priceFrom").val() == "" || parseInt($("#priceFrom").val()) >= parseInt(priceTo)){
                search_button.prop('disabled', true); 
                priceRangeOrNot = false;

            }
            else{
                search_button.prop('disabled', false); 
                priceRangeOrNot = true;

            }
            
        }
    });

    $("#start-date").change(function(e){
        var alertMessage = "Start date can't be later than end date or current date";
        var selecteDate =  $("#start-date").val();
        selecteDate = new Date(selecteDate);
        console.log(selecteDate);
        var currentDate = moment().format('ll');
        currentDate = new Date(currentDate);
        console.log(currentDate);
        var checkDate = Date.parse(currentDate) || 0;
        var errorMessage = $("<p></p>").addClass("error-date").text(alertMessage);
        debugger;
        if(checkDate == 0){
            search_button.prop('disabled', false);
            DateOrNot = false;
            return;
        }
        if(selecteDate.getFullYear() == currentDate.getFullYear() ){
            if(selecteDate.getMonth() > currentDate.getMonth()){
                search_button.prop('disabled', false);
                DateOrNot = true;
            }
            else if(selecteDate.getMonth() == currentDate.getMonth()) {
                if((selecteDate.getDate() >= currentDate.getDate())) {
                    search_button.prop('disabled', false);
                    DateOrNot = true;
                   
                }
                else{
                    search_button.prop('disabled', true);
                    DateOrNot = false;
                    $("#countrySearch").append(errorMessage);
                    setTimeout(function () {
                        $(".error-date").remove();
                    }, 2000);
                    
                }
            }
            else{
                search_button.prop('disabled', true);
                DateOrNot = false;
                $("#countrySearch").append(errorMessage);
                setTimeout(function () {
                    $(".error-date").remove();
                }, 2000);
            }

        }
        else if(selecteDate.getFullYear() > currentDate.getFullYear()){
            search_button.prop('disabled', false);
            DateOrNot = true;
        }
        else{
            search_button.prop('disabled', true);
            DateOrNot = false;
            $("#countrySearch").append(errorMessage);
            setTimeout(function () {
                $(".error-date").remove();
            }, 2000);
        }
        

    });

    //eventlistener of country text search change
    $("#countryText").change(async function (e) { 
        e.preventDefault();
        e.stopPropagation();
        var search_text = $("#countryText").val();
        if(search_text.replace(" ","") == ""){
            $("#cityText").prop('disabled', false);
            return;
        }
        $("#cityText").prop('disabled', true);
        countryOrNot = true;


        
    });
    //evnetlistener of city text search change
    $("#cityText").change(async function (e) { 
        e.preventDefault();
        e.stopPropagation();
        var search_text = $("#cityText").val();
        if(search_text.replace(" ","") == ""){
            $("#countryText").prop('disabled', false);
            return;
        }
        $("#countryText").prop('disabled', true);
        countryOrNot = false;        
    });
    function firstCheck(){
        var list = localStorage.getItem("list");
        list = JSON.parse(list);
        if(list == null){
            $("#budget-mo").removeAttr('href');
            $("#budget").removeAttr('href');
        }
    }



    async function dataSearch(search_text){
        if(countryOrNot){
            await $.ajax({
                    type: "get",
                    url: countryBaseUrl+getCountryName(search_text)+query,
                    data: "data",
                    dataType: "JSON",
                    success: function (response) {
                        if(response._embedded != "" && response._embedded != null){
                            var directUrl = "./search.html?countryCode="+getCountryName(search_text);
                            var startDate = new Date($("#start-date").val());

                            debugger;
                            console.log("pass");
                            console.log(response._embedded);
                            if(priceRangeOrNot){
                                directUrl += "&priceFrom="+$("#priceFrom").val()+"&priceTo="+$("#priceTo").val();
                            }
                            if(DateOrNot){
                                var month = startDate.getMonth();
                                month = parseInt(month)+1;
                                directUrl += "&startDateTime=" + startDate.getFullYear()+"-"+month+"-"+startDate.getDate();

                            }
                            window.location.href = directUrl;
                        }
                        else{
                            $("#countryText").val("");
                            $("#cityText").prop('disabled', false);
                            console.log("pass2");
                            var errorMessage = $("<p></p>").addClass("error-message").text("There are no search results for this. Please try again");
                            $("#countrySearch").append(errorMessage);
                            setTimeout(function () {
                                $(".error-message").remove();
                            }, 2000);
                        }
                }
            });
        }
        else{
            await $.ajax({
                type: "get",
                url: cityBaseUrl+search_text+query,
                data: "data",
                dataType: "JSON",
                success: function (response) {
                    
                    if(response._embedded != "" && response._embedded != null){
                        var directUrl = "./search.html?city=" +search_text;
                        var startDate = new Date($("#start-date").val());
                        console.log("pass");
                        console.log(response._embedded);
                        if(priceRangeOrNot){
                            directUrl += "&priceFrom="+$("#priceFrom").val()+"&priceTo="+$("#priceTo").val();
                        }
                        if(DateOrNot){
                            var month = startDate.getMonth();
                            month = parseInt(month)+1;
                            directUrl += "&startDateTime=" + startDate.getFullYear()+"-"+month+"-"+startDate.getDate();
                        }

                        window.location.href = directUrl;
                    }
                    else{
                        $("#cityText").val("");
                        $("#countryText").prop('disabled', false);
                        var errorMessage = $("<p></p>").addClass("error-message").text("There are no search results for this. Please try again");
                        $("#countrySearch").append(errorMessage);
                        setTimeout(function () {
                            $(".error-message").remove();
                        }, 2000);
                    }
                }
            });
        }
    }


    //function return countrycode 
    function getCountryName (countryCode) {
        if (isoCountries.hasOwnProperty(countryCode)) {
            return isoCountries[countryCode];
        } 
        else {
            //return origin input
            return countryCode;
        }
    }

    getParams();
 });