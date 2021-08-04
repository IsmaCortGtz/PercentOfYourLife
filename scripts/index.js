//Define custome elements
window.customElements.define("get-age", GetAge);
window.customElements.define("details-page", DetailsPage);
window.customElements.define("progres-bar", ProgresBar);
window.customElements.define("return-button", ReturnButton);

const totalYears = 80;


//FUnctions
function useContinueButton(){

    if (document.getElementById("inputAge").value !== ""){

        var yourAge = parseInt(document.getElementById("inputAge").value);
        var PorcentOfYoutLife = (yourAge * 100) / totalYears

        if (PorcentOfYoutLife >= 100) { PorcentOfYoutLife = 99.9 }
        document.getElementById("MainProgres").setAttribute("progres", PorcentOfYoutLife)

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