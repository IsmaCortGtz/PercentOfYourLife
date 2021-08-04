class CounterText extends HTMLElement {
    constructor(){
        super();

        this.setAttribute("class", "CounterText");
        
        this.Holder = document.createElement("div");
        this.Holder.setAttribute("class", "CounterHolder");
        this.Holder.textContent = this.getAttribute("holder");

        this.Counter = document.createElement('div');
        this.Counter.setAttribute("class", "CounterCounter");
        this.Counter.textContent = this.getAttribute("counter");

        this.Total = document.createElement("div");
        this.Total.setAttribute("class", "CounterTotal");
        this.Total.textContent = " / " + this.getAttribute("total");
    }

    static get observedAttributes(){
        return ["holder", "counter", "total"];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch(nameAtr){
            case "holder":
                this.Holder.textContent = newValue;
                break;
            case "counter":
                this.Counter.textContent = newValue;
                break;
            case "total":
                this.Total.textContent = " / " + newValue;
                break;
        }
    }


    connectedCallback(){

        this.appendChild(this.Holder);
        this.appendChild(this.Counter);
        this.appendChild(this.Total);

    }
}