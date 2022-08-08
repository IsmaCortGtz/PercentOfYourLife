class ReturnButton extends HTMLElement {
    constructor(){
        super();

        var InputReturn = document.createElement('input');
        InputReturn.setAttribute("class", "buttonAge");
        InputReturn.setAttribute("type", "button");
        InputReturn.setAttribute("value", "Edit date");
        InputReturn.setAttribute("onclick", "toggleSections()");
        this.style.marginTop = "20px"

        this.appendChild(InputReturn);
    }
}