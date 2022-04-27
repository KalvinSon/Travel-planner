$(document).ready(function () {
    var list = localStorage.getItem("list");
    list = JSON.parse(list);
    var activities_list = $("#activities-list");
    $(".travel").attr("style","display:none");
    loadCards();
   
    async function loadCards(){
        var totalAvg = 0;
        for (let index = list.length-1; index > -1; index--) {
            var tempAvg;
            var name =  list[index].name;
            var date = list[index].date;
            var url = list[index].url;
            const errorText = "Cost: No cost listed. Check events website for cost information.";
            var currency = "";
            var cost = list[index].cost;
            if(cost != errorText){ 
                var firstcurIndex = cost.indexOf("$");
                var hyphen = cost.indexOf("-");
                var firstCurrency = cost.substring(firstcurIndex-3,firstcurIndex);
                currency = firstCurrency;
                var startPrice = cost.substring(firstcurIndex+1,hyphen);
                var backString = cost.substring(firstcurIndex+1,cost.length);
                var secCurrency = backString.indexOf("$");
                var endPrice = backString.substring(secCurrency+1,backString.length);
                console.log(firstCurrency);
                var avgPri =(parseFloat(startPrice)+parseFloat(endPrice))/2;
                tempAvg = avgPri;

            }
            var card = $("<div/>").attr("class","card card-content activity-card").attr("id","card"+index);
            activities_list.append(card);
            var activity_title = $("<p/>").attr("class","activity-title").text(name);
            card.append(activity_title);
            var minus_btn = $("<a/>").attr("class","btn-floating del-btn halfway-fab waves-effect waves-light select-activity").html("<i class='material-icons'>minus</i>");
            minus_btn.attr("id","btn"+index);
            minus_btn.attr("data-value",cost);
            
            card.append(minus_btn);
            var date_info = $("<p/>").attr("class","activity-info").text(date);
            card.append(date_info);
            var cost_info = $("<p/>").attr("class","activity-info").text(cost);
            card.append(cost_info);
            var link_info = $("<a/>").attr("class","activity-info event-link").text("Click here for more event information");
            link_info.attr("href",url);
            card.append(link_info);
            if(currency != ""){
                await $.ajax({
                    type: "get",
                    url: "https://v6.exchangerate-api.com/v6/2ca735724a206b15c406d39e/latest/"+currency,
                    data: "data",
                    dataType: "JSON",
                    success: function (response) {
                       var conRate = response.conversion_rates.AUD;
                       totalAvg = totalAvg + conRate*tempAvg;   
                       tempAvg = conRate*tempAvg;
                       minus_btn.attr("data-cost",tempAvg);
                       console.log("Total Avg: "+tempAvg);
                    }
                });
            }
            minus_btn.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                const row = index;
                const errorText = "Cost: No cost listed. Check events website for cost information.";
                var currentList = localStorage.getItem("list");
                currentList = JSON.parse(currentList);
                currentList.splice(row,1);
                console.log($(`#btn${row}`).attr("data-value"));
                localStorage.setItem("list",JSON.stringify(currentList));
                if($(`#btn${row}`).attr("data-value") != errorText){
                   var text = $(".total-budget-number").text();
                   var end = text.indexOf("(");
                   text = (parseFloat(text.substring(1,end)) - parseFloat($(`#btn${row}`).attr("data-cost"))) < 0 ?  0: parseFloat(text.substring(1,end)) - parseFloat($(`#btn${row}`).attr("data-cost")) ;
                   $(".total-budget-number").text("$"+text.toFixed(2)+"(AUD)");
                   console.log(text);
                }
                $(`#card${row}`).remove();
            });
            
        }
        $(".total-budget-number").text($(".total-budget-number").text()+totalAvg.toFixed(2)+"(AUD)");
        $(".travel").attr("style","display:block");
    }


});

$(document).ready(function(){
    $('select').formSelect();
  });
$('.dropdown-trigger').dropdown();

//country codes to be used in drop down list
var Countries  = {
        "AED" : "AE",
        "AFN" : "AF",
        "XCD" : "AG",
        "ALL" : "AL",
        "AMD" : "AM",
        "ANG" : "AN",
        "AOA" : "AO",
        "AQD" : "AQ",
        "ARS" : "AR",
        "AUD" : "AU",
        "AZN" : "AZ",
        "BAM" : "BA",
        "BBD" : "BB",
        "BDT" : "BD",
        "XOF" : "BE",
        "BGN" : "BG",
        "BHD" : "BH",
        "BIF" : "BI",
        "BMD" : "BM",
        "BND" : "BN",
        "BOB" : "BO",
        "BRL" : "BR",
        "BSD" : "BS",
        "NOK" : "BV",
        "BWP" : "BW",
        "BYR" : "BY",
        "BZD" : "BZ",
        "CAD" : "CA",
        "CDF" : "CD",
        "XAF" : "CF",
        "CHF" : "CH",
        "CLP" : "CL",
        "CNY" : "CN",
        "COP" : "CO",
        "CRC" : "CR",
        "CUP" : "CU",
        "CVE" : "CV",
        "CYP" : "CY",
        "CZK" : "CZ",
        "DJF" : "DJ",
        "DKK" : "DK",
        "DOP" : "DO",
        "DZD" : "DZ",
        "ECS" : "EC",
        "EEK" : "EE",
        "EGP" : "EG",
        "ETB" : "ET",
        "EUR" : "FR",
        "FJD" : "FJ",
        "FKP" : "FK",
        "GBP" : "GB",
        "GEL" : "GE",
        "GGP" : "GG",
        "GHS" : "GH",
        "GIP" : "GI",
        "GMD" : "GM",
        "GNF" : "GN",
        "GTQ" : "GT",
        "GYD" : "GY",
        "HKD" : "HK",
        "HNL" : "HN",
        "HRK" : "HR",
        "HTG" : "HT",
        "HUF" : "HU",
        "IDR" : "ID",
        "ILS" : "IL",
        "INR" : "IN",
        "IQD" : "IQ",
        "IRR" : "IR",
        "ISK" : "IS",
        "JMD" : "JM",
        "JOD" : "JO",
        "JPY" : "JP",
        "KES" : "KE",
        "KGS" : "KG",
        "KHR" : "KH",
        "KMF" : "KM",
        "KPW" : "KP",
        "KRW" : "KR",
        "KWD" : "KW",
        "KYD" : "KY",
        "KZT" : "KZ",
        "LAK" : "LA",
        "LBP" : "LB",
        "LKR" : "LK",
        "LRD" : "LR",
        "LSL" : "LS",
        "LTL" : "LT",
        "LVL" : "LV",
        "LYD" : "LY",
        "MAD" : "MA",
        "MDL" : "MD",
        "MGA" : "MG",
        "MKD" : "MK",
        "MMK" : "MM",
        "MNT" : "MN",
        "MOP" : "MO",
        "MRO" : "MR",
        "MTL" : "MT",
        "MUR" : "MU",
        "MVR" : "MV",
        "MWK" : "MW",
        "MXN" : "MX",
        "MYR" : "MY",
        "MZN" : "MZ",
        "NAD" : "NA",
        "XPF" : "NC",
        "NGN" : "NG",
        "NIO" : "NI",
        "NPR" : "NP",
        "NZD" : "NZ",
        "OMR" : "OM",
        "PAB" : "PA",
        "PEN" : "PE",
        "PGK" : "PG",
        "PHP" : "PH",
        "PKR" : "PK",
        "PLN" : "PL",
        "PYG" : "PY",
        "QAR" : "QA",
        "RON" : "RO",
        "RSD" : "RS",
        "RUB" : "RU",
        "RWF" : "RW",
        "SAR" : "SA",
        "SBD" : "SB",
        "SCR" : "SC",
        "SDG" : "SD",
        "SEK" : "SE",
        "SGD" : "SG",
        "SKK" : "SK",
        "SLL" : "SL",
        "SOS" : "SO",
        "SRD" : "SR",
        "STD" : "ST",
        "SVC" : "SV",
        "SYP" : "SY",
        "SZL" : "SZ",
        "THB" : "TH",
        "TJS" : "TJ",
        "TMT" : "TM",
        "TND" : "TN",
        "TOP" : "TO",
        "TRY" : "TR",
        "TTD" : "TT",
        "TWD" : "TW",
        "TZS" : "TZ",
        "UAH" : "UA",
        "UGX" : "UG",
        "USD" : "US",
        "UYU" : "UY",
        "UZS" : "UZ",
        "VEF" : "VE",
        "VND" : "VN",
        "VUV" : "VU",
        "YER" : "YE",
        "ZAR" : "ZA",
        "ZMK" : "ZM",
        "ZWD" : "ZW"
    }

    const dropList = document.querySelectorAll("form select"),
    from = document.querySelector(".from select"),
    to = document.querySelector(".to select"),
    btn = document.querySelector("form button");
    
    //Dropdown list and options being created for the drop down box
    for (let i = 0; i < dropList.length; i++) {
        for(let currency_code in Countries){
            // setting default currency when page loads to AUST to USA
            let selected = i == 0 ? currency_code == "AUD" ? "selected" : "" : currency_code == "USD" ? "selected" : "";
            let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
            dropList[i].insertAdjacentHTML("beforeend", optionTag);
        }
       
    }
    
   
    
    window.addEventListener("load", ()=>{
        getExchangeRate();
    });
    
    btn.addEventListener("click", e =>{
        e.preventDefault();
        getExchangeRate();
    });
    
    //
    const exchangeIcon = document.querySelector("form .icon");
    exchangeIcon.addEventListener("click", ()=>{
        let tempCode = from.value; // temporary currency code of FROM drop list
        from.value = to.value; // passing TO currency code to FROM currency code
        to.value = tempCode; // passing temporary currency code to TO currency code
        getExchangeRate(); 
    })
    
    function getExchangeRate(){
   
        const exchangeRateTxt = document.querySelector("form .exchange-rate");
        let amountVal = 1;
        exchangeRateTxt.innerText = "Loading exchange rate";
        let url = `https://v6.exchangerate-api.com/v6/2ca735724a206b15c406d39e/latest/${from.value}`;
        fetch(url).then(response => response.json()).then(result =>{
            let exchangeRate = result.conversion_rates[to.value]; // getting user selected TO currency rate
            let totalExRate = (amountVal * exchangeRate).toFixed(2); // multiplying user entered value with selected TO currency rate
            exchangeRateTxt.innerText = `${amountVal} ${from.value} = ${totalExRate} ${to.value}`;
        }).catch(() =>{ 
            exchangeRateTxt.innerText = "Apologies, something went wrong";
        });
    }