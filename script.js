// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
      let planet = pickPlanet(listedPlanets);
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
  
   let list = document.getElementById("faultyItems");
  list.style.visibility = "hidden";
    let form = document.getElementById("testForm");
    form.addEventListener("submit", function(event){ 
      event.preventDefault();

       let pilot = document.querySelector("input[name=pilotName]");
       let copilot = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoLevel = document.querySelector("input[name=cargoMass]");
       if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === ""){
           alert("All fields are Required!");
      }
      formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    });
});
