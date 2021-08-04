class GetAge extends HTMLElement {
    constructor(){
        super();     
    }


    connectedCallback(){
        this.setAttribute("class", "getAge");
        this.setAttribute("id", "getAge");

        var InputAge = document.createElement('input');
        InputAge.setAttribute("class", "inputAge");
        InputAge.setAttribute("id", "inputAge");
        InputAge.setAttribute("type", "number");
        InputAge.setAttribute("placeholder", "Edad en años");

        var InputContinue = document.createElement('input');
        InputContinue.setAttribute("class", "buttonAge");
        InputContinue.setAttribute("id", "buttonAge");
        InputContinue.setAttribute("type", "button");
        InputContinue.setAttribute("value", "Continuar");
        InputContinue.setAttribute("onclick", "useContinueButton()");
        
        this.appendChild(InputAge);
        this.appendChild(InputContinue);
    }
}