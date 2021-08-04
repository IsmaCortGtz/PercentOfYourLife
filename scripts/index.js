//Define custome elements
window.customElements.define("get-age", GetAge);
window.customElements.define("details-page", DetailsPage);
window.customElements.define("progres-bar", ProgresBar);
window.customElements.define("return-button", ReturnButton);
window.customElements.define("counter-text", CounterText);

const totalYears = 80;
const totalMonths = 960;
const totalWeeks = 4171;
const totalDays = 29200;


//FUnctions
function useContinueButton(){

    if (document.getElementById("inputAge").value !== ""){

        var yourAge = parseInt(document.getElementById("inputAge").value);
        var PorcentOfYoutLife = (yourAge * 100) / totalYears

        var yourMonths = (yourAge * 12);
        var yourWeeks = (yourAge * 52);
        var yourDays = (yourAge * 365);

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
        

        document.getElementById("detailsPage").style.display = "flex";
        document.getElementById("getAge").style.display = "none";

    }else{
        alert("Debes ingresar un numero");
    }

    

}

function useReturnButton() {
    document.getElementById("detailsPage").style.display = "none";
    document.getElementById("getAge").style.display = "flex";
}