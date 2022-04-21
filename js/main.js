$(document).ready(function(){
    $(".dropdown-trigger").dropdown();
    $("#countryText").val("");
    $("#cityText").val("");
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
    const countryBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&countryCode=";
    const cityBaseUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&city=";
    const query = "&apikey=gUiVU8bG3ETIv2go0u9OVZAKqfmVvpBA";
    var search_button = $("#search-button");


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
                alert("There are no search results for this.");
                alert("Please Check your query parameters.");
            }
        }
        //if city is the search parameter
        else{
            var search_text = $("#cityText").val();
            search_text = search_text.toLowerCase();
            await dataSearch(search_text);
        }

        

    });




    //evnetlistener of country text search change
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



    async function dataSearch(search_text){
        if(countryOrNot){
            await $.ajax({
                    type: "get",
                    url: countryBaseUrl+getCountryName(search_text)+query,
                    data: "data",
                    dataType: "JSON",
                    success: function (response) {
                        if(response._embedded != "" && response._embedded != null){ 
                            console.log("pass");
                            console.log(response._embedded);
                            window.location.href = "./search.html?countryCode="+getCountryName(search_text);
                        }
                        else{
                            $("#countryText").val("");
                            $("#cityText").prop('disabled', false);
                            console.log("pass2");
                            alert("There are no search results for this.");
                            alert("Please Check your query parameters.");
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
                        console.log("pass");
                        console.log(response._embedded);
                        window.location.href = "./search.html?city=" +search_text;
                    }
                    else{
                        $("#cityText").val("");
                        $("#countryText").prop('disabled', false);
                        alert("There are no search results for this.");
                        alert("Please Check your query parameters.");
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

    
 });