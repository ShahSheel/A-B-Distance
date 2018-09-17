$(document).ready(function(){
    $("#Submit").click(function(event){
        console.log("Clicked");
       $('#r_distance').empty(); //Empty any stored data
        begin();
        event.preventDefault();
    });
});

var mainURL;

function begin(){
  createURL();
  console.log(mainURL);
  callAjax();
}

function createURL(){
    if (document.getElementById('location') != null) { var location = document.getElementById("location").value; }
    if (document.getElementById('destination') != null) { var destination = document.getElementById("destination").value; }

    var selection = document.querySelector('input[name="selection"]:checked').id;

    /** Create the URL **/ 
    var beginURL = "https://www.mapquestapi.com/directions/v2/route?key=9vyfTMs7Q4JVtr4u5ItN8Fd0YHuw1dqn&from=";
    url = beginURL.concat(location);
    var addDestnation = "&to="
    var addDest = addDestnation.concat(destination);
    url2 = url.concat(addDest);
    var returnXMLFormat = "&outFormat=XML&ambiguities=ignore&"
    url3 = url2.concat(returnXMLFormat);
    var routeType = "routeType=";
    var combineRoute = routeType.concat(selection);
    url4 = url3.concat(combineRoute);
    var endURL = "&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false"
    finalURL = url4.concat(endURL);
    mainURL = finalURL;

}

function callAjax(){
    console.log("Clicked");
   $.ajax({
    type: "GET", 
    url: mainURL,
    dataType: "XML",
    success: parseXML,
     error: function (request, status, error) {
        console.log(request.responseText); //Alerts Undefined
    }
  });
}

 //This method doesn't get called, always fails. 
function parseXML(xml) {
  console.log("display xml");
 
  var ballList = $('distance', xml).get();
  $.each(ballList, function( index, value ) {
    console.log( index + ": " + value.textContent );
    $('#r_distance').append("<b>Distance in miles: </b>" + value.textContent);
    return false;
  });
  
}