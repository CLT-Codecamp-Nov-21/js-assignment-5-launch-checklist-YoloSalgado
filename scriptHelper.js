// Write your helper functions here!
try{
    require('isomorphic-fetch');
} catch (e){
    //do nothing
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML=`
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`
    
 }

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";

    }

    else if (isNaN ( Number(testInput) )){
        return "Not a Number";

    }

    else {
        return "Is a Number";
    }

   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const inputsValue = [pilot, copilot, fuelLevel, cargoLevel];
    for (let i = 0; i < inputsValue.length; i++){
        if (validateInput(inputsValue[i]) === "Empty"){
            alert("All Fields Are Required!");
            return;
        }
    }
   
     if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
         alert("Enter Valid Information for Each Field");
         return;
     }
     fuelLevel = Number(fuelLevel);
     cargoLevel = Number(cargoLevel);
 
     let pilotStatus = document.getElementById("pilotStatus");
     pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
     let copilotStatus = document.getElementById("copilotStatus");
     copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch.`;
     let fuelStatus = document.getElementById("fuelStatus");
     let cargoStatus = document.getElementById("cargoStatus");
     let launchStatus = document.getElementById("launchStatus");
     let ready = true;
 
 
 
     if (fuelLevel < 10000){
         fuelStatus.innerHTML = "Fuel Level is too low for launch";
         ready = false;
     }else{
         fuelStatus.innerHTML = "Fuel Level is high enough for launch";
     }
 
     if (cargoLevel > 10000){
        cargoStatus.innerHTML = "Cargo Mass is too heavy for launch";
        ready = false;
     }else{
         cargoStatus.innerHTML = "Cargo Mass is low enough for launch";
     }
 
     if (!ready) {
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         launchStatus.style.color = "rgb(199,37,78)";
     } else {
         launchStatus.innerHTML = "Shuttle is Ready For Launch";
         launchStatus.style.color = "rgb(65, 159, 106)";
         }
 
       list.style.visibility = "visible";
   



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random()* planets.length);
    return planets[randomPlanet];
}
try{
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
} catch (e){
    // do nothing
}