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