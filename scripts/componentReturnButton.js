class ReturnButton extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){

        var InputReturn = document.createElement('input');
        InputReturn.setAttribute("class", "buttonAge");
        InputReturn.setAttribute("type", "button");
        InputReturn.setAttribute("value", "Return");
        InputReturn.setAttribute("onclick", "useReturnButton()");
        this.style.marginTop = "20px"

        this.appendChild(InputReturn);

        
    }
}