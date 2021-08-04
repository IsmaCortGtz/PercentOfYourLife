class DetailsPage extends HTMLElement {
    constructor(){
        super();     
    }


    connectedCallback(){
        this.style.display = "none";
        this.style.flexDirection = "column";
        this.style.width = "100%";
        this.setAttribute("id", "detailsPage")

        var MainProgres = document.createElement('progres-bar');
        MainProgres.setAttribute("id", "MainProgres");

        var ReturnButton = document.createElement('return-button');
        
        this.appendChild(MainProgres);
        this.appendChild(ReturnButton);
    }
}