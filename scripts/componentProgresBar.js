class ProgresBar extends HTMLElement {
    constructor(){
        super();
    }

    static get observedAttributes(){
        return ["progres"];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch(nameAtr){
            case "progres":
                this.Text.textContent = newValue + "%";
                this.Progres.style.width = newValue + "%";
                break;
        }
    }


    connectedCallback(){

        this.setAttribute("class", "ProgresBar");
        

        var Holder = document.createElement('div');
        Holder.setAttribute("class", "ProgresHolder");

        this.Progres = document.createElement("div");
        this.Progres.setAttribute("class", "ProgresProgres");

        this.Text = document.createElement("div");
        this.Text.setAttribute("class", "ProgresText");
        this.Text.textContent = "50%";

        Holder.appendChild(this.Progres);
        this.appendChild(Holder);
        this.appendChild(this.Text);

        
    }
}