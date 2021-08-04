class DetailsPage extends HTMLElement {
    constructor(){
        super();     
    }


    connectedCallback(){
        this.style.display = "none";
        this.style.flexDirection = "column";
        this.style.width = "100%";
        this.setAttribute("id", "detailsPage")

        var Title = document.createElement("h1");
        Title.setAttribute("class", "DetailsTitle");
        Title.textContent = "Porcent Of Your Life";

        var MainProgres = document.createElement('progres-bar');
        MainProgres.setAttribute("id", "MainProgres");

        var CounterYears = document.createElement('counter-text');
        CounterYears.setAttribute("id", "CounterYears");
        CounterYears.setAttribute("holder", "Años de vida");
        CounterYears.setAttribute("counter", "3");
        CounterYears.setAttribute("total", "80");

        var CounterMonths = document.createElement('counter-text');
        CounterMonths.setAttribute("id", "CounterMonths");
        CounterMonths.setAttribute("holder", "Meses de vida");
        CounterMonths.setAttribute("counter", "3");
        CounterMonths.setAttribute("total", "80");

        var CounterWeeks = document.createElement('counter-text');
        CounterWeeks.setAttribute("id", "CounterWeeks");
        CounterWeeks.setAttribute("holder", "Semanas de vida");
        CounterWeeks.setAttribute("counter", "3");
        CounterWeeks.setAttribute("total", "80");

        var CounterDays = document.createElement('counter-text');
        CounterDays.setAttribute("id", "CounterDays");
        CounterDays.setAttribute("holder", "Dias de vida");
        CounterDays.setAttribute("counter", "3");
        CounterDays.setAttribute("total", "80");

        var ReturnButton = document.createElement('return-button');
        
        this.appendChild(Title);
        this.appendChild(MainProgres);
        this.appendChild(CounterYears);
        this.appendChild(CounterMonths);
        this.appendChild(CounterWeeks);
        this.appendChild(CounterDays);
        this.appendChild(ReturnButton);
    }
}