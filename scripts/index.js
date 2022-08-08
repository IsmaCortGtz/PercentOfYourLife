//Define custome elements
window.customElements.define("get-age", GetAge);
window.customElements.define("details-page", DetailsPage);
window.customElements.define("progres-bar", ProgresBar);
window.customElements.define("return-button", ReturnButton);
window.customElements.define("counter-text", CounterText);

var yourAge;
const timeData = {
    totalYears: 80,
    totalMonths: 960,
    totalWeeks: 4171,
    totalDays: 29200
}
getSavedAge();


//FUnctions
function useContinueButton(){
    if (document.getElementById("inputAge").value !== ""){
        yourAge = parseInt(document.getElementById("inputAge").value);
        window.localStorage.setItem("savedAge", yourAge.toString());
        updateData();
        toggleSections();
    }else{
        alert("You need to put a number");
    }
}

function getSavedAge(){
    let savedAge = window.localStorage.getItem("savedAge")
    if (savedAge !== null){
        document.getElementById("inputAge").value = savedAge;
        yourAge = parseInt(savedAge);
        updateData();
        toggleSections();
    }
}


function updateData(){
    let PorcentOfYoutLife = (yourAge * 100) / timeData.totalYears
    let yourMonths = (yourAge * 12);
    let yourWeeks = (yourAge * 52);
    let yourDays = (yourAge * 365);
    if (PorcentOfYoutLife >= 100) { PorcentOfYoutLife = 99.9 }

    document.getElementById("MainProgres").setAttribute("progres", PorcentOfYoutLife);
    document.getElementById("CounterYears").setAttribute("counter", yourAge);
    document.getElementById("CounterYears").setAttribute("total", timeData.totalYears);
    document.getElementById("CounterMonths").setAttribute("counter", yourMonths);
    document.getElementById("CounterMonths").setAttribute("total", timeData.totalMonths);
    document.getElementById("CounterWeeks").setAttribute("counter", yourWeeks);
    document.getElementById("CounterWeeks").setAttribute("total", timeData.totalWeeks);
    document.getElementById("CounterDays").setAttribute("counter", yourDays);
    document.getElementById("CounterDays").setAttribute("total", timeData.totalDays);
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