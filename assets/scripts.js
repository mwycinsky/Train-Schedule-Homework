// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBLULkrGtvlaJylUzHU6m3AKTUTVw41DUQ",
    authDomain: "employee-data-91f00.firebaseapp.com",
    databaseURL: "https://employee-data-91f00.firebaseio.com",
    projectId: "employee-data-91f00",
    storageBucket: "employee-data-91f00.appspot.com",
    messagingSenderId: "963477689579"
  };
  firebase.initializeApp(config);


var database = firebase.database();

// 2. Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destinationInput = $("#destination-input").val().trim();
  var firstTrain = moment($("#first-train-input").val().trim(), "MM/DD/YYYY").format("X");
  var frequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrain = {
    trainName: trainName,
    destination: destinationInput,
    start: firstTrain,
    frequency: frequency
  };

  

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
//   console.log(newEmp.name);
//   console.log(newEmp.role);
//   console.log(newEmp.start);
//   console.log(newEmp.rate);

  alert("Employee successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(snapshot) {

  console.log(snapshot.val());

  // Store everything into a variable to add back into html table
   var trainName = snapshot.val().trainName;
  var destinationInput = snapshot.val().destination;
   var firstTrain = snapshot.val().start;
   var frequency = snapshot.val().frequency;

  // Employee Info
//   console.log(empName);
//   console.log(empRole);
//   console.log(empStart);
//   console.log(empRate);

  // Prettify the employee start
  //var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  //var empMonths = moment().diff(moment(empStart, "X"), "months");
  //console.log(empMonths);

  // Calculate the total billed rate
  //var empBilled = empMonths * empRate;
  //console.log(empBilled);

var nextArrival;
var minutesAway;



  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destinationInput),
    $("<td>").text(frequency),
    $("<td>").text(nextArrival),
    $("<td>").text(minutesAway)
    
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use meets this test case
