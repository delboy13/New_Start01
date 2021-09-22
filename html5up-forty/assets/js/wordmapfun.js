
 // set the data
 var data = [
    {"x": "PluralSight", "value": 1090000000},
    {"x": "Degreed", "value": 983000000},
    {"x": "ABAP", "value": 544000000},
    {"x": "YouTube", "value": 527000000},
    {"x": "SQL", "value": 422000000},
    {"x": "Amigos", "value": 281000000},
    {"x": "Jira", "value": 267000000},
    {"x": "Talk Club", "value": 261000000},
    {"x": "Feedback", "value": 229000000},
    {"x": "DA", "value": 229000000},
    {"x": "NewsLetter", "value": 150000000},
    {"x": "Catch Up", "value": 148000000}
  ];

  anychart.onDocumentReady(function() {
  var data = [
    {"x": "PluralSight", "value": 1090000000},
    {"x": "Degreed", "value": 983000000},
    {"x": "ABAP", "value": 544000000},
    {"x": "W3Schools", "value": 527000000},
    {"x": "SQL", "value": 422000000},
    {"x": "Amigos", "value": 281000000},
    {"x": "Jira", "value": 267000000},
    {"x": "TalkClub", "value": 261000000},
    {"x": "Feedback", "value": 229000000},
    {"x": "DA", "value": 229000000},
    {"x": "NewsLetter", "value": 150000000},
    {"x": "friday", "value": 148000000}
    
  ];

 // create a tag (word) cloud chart
  var chart = anychart.tagCloud(data);

   // set a chart title
  chart.title('Learning')
  // set an array of angles at which the words will be laid out
  chart.angles([0, 45, 90])
  // enable a color range
  chart.colorRange(false);
  // set the color range length
  chart.colorRange().length('80%');


  chart.listen("pointClick", function(e){
  var url = "C:/Users/lekke/OneDrive/Desktop/Jaye%20Stuff/GitFinal/New_Start01/html5up-forty/" + e.point.get("x") + ".html";
  window.open(url, "_blank");
});
  // display the word cloud chart
  chart.container("container");
  chart.draw();



  
});
