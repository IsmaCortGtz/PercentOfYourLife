// Define Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

//Define custome elements
window.customElements.define("get-age", GetAge);
window.customElements.define("details-page", DetailsPage);
window.customElements.define("progres-bar", ProgresBar);
window.customElements.define("return-button", ReturnButton);
window.customElements.define("counter-text", CounterText);

const currentDate = new Date();
const totalYears = 80;
const totalMonths = Math.ceil(12 * totalYears);
const totalWeeks = Math.ceil(52.143 * totalYears);
const totalDays = Math.ceil(365 * totalYears);

var yourDate;
getSavedAge();


//FUnctions
function useContinueButton(){
    if (document.getElementById("inputDate").valueAsDate !== null){
        yourDate = getInputDate();
        window.localStorage.setItem("savedDate", yourDate.toString());
        updateData();
        toggleSections();
    }else{
        alert("You need to put a number");
    }
}

function getSavedAge(){
    let savedDate = window.localStorage.getItem("savedDate")
    if (savedDate !== null){
        yourDate = new Date(savedDate);
        document.getElementById("inputDate").value = formatDateToInput(yourDate);
        updateData();
        toggleSections();
    }
}


function updateData(){
    let yourAge = Math.abs(currentDate.getFullYear() - yourDate.getFullYear());
    let yourMonths = currentDate.getMonth() - yourDate.getMonth() + 12 * (currentDate.getFullYear() - yourDate.getFullYear());
    let yourWeeks = Math.round(Math.abs(currentDate - yourDate) / (1000 * 60 * 60 * 24 * 7 ));
    let yourDays = Math.ceil(Math.abs(currentDate - yourDate) / (1000 * 60 * 60 * 24));
    let PorcentOfYoutLife = (yourAge * 100) / totalYears;
    if (PorcentOfYoutLife >= 100) { PorcentOfYoutLife = 99.9 }

    document.getElementById("MainProgres").setAttribute("progres", PorcentOfYoutLife);
    document.getElementById("CounterYears").setAttribute("counter", yourAge);
    document.getElementById("CounterYears").setAttribute("total", totalYears);
    document.getElementById("CounterMonths").setAttribute("counter", yourMonths);
    document.getElementById("CounterMonths").setAttribute("total", totalMonths);
    document.getElementById("CounterWeeks").setAttribute("counter", yourWeeks);
    document.getElementById("CounterWeeks").setAttribute("total", totalWeeks);
    document.getElementById("CounterDays").setAttribute("counter", yourDays);
    document.getElementById("CounterDays").setAttribute("total", totalDays);
}


function toggleSections() {
    if (document.getElementById("detailsPage").style.display === "none"){
        document.getElementById("detailsPage").style.display = "flex";
        document.getElementById("getAge").style.display = "none";
    }else{
        document.getElementById("detailsPage").style.display = "none";
        document.getElementById("getAge").style.display = "flex";
    }
}


function formatDateToInput(date = new Date()) {
    return [
      date.getFullYear(),
      (date.getMonth() + 1).toString().padStart(2, '0'),
      (date.getDate()).toString().padStart(2, '0'),
    ].join('-');
}


function getInputDate(){
    let dateValueText = document.getElementById("inputDate").value;
    let dateSplitted =dateValueText.split("-");
    return new Date( [
        dateSplitted[1], // Month
        dateSplitted[2], // Day
        dateSplitted[0]  // Year
    ].join("/"));
}