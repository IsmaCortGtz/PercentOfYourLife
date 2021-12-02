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

        var CounterYears = document.createElement('counter-text');
        CounterYears.setAttribute("id", "CounterYears");
        CounterYears.setAttribute("holder", "Years of life");
        CounterYears.setAttribute("counter", "3");
        CounterYears.setAttribute("total", "80");

        var CounterMonths = document.createElement('counter-text');
        CounterMonths.setAttribute("id", "CounterMonths");
        CounterMonths.setAttribute("holder", "Months of life");
        CounterMonths.setAttribute("counter", "3");
        CounterMonths.setAttribute("total", "80");

        var CounterWeeks = document.createElement('counter-text');
        CounterWeeks.setAttribute("id", "CounterWeeks");
        CounterWeeks.setAttribute("holder", "Weeks of life");
        CounterWeeks.setAttribute("counter", "3");
        CounterWeeks.setAttribute("total", "80");

        var CounterDays = document.createElement('counter-text');
        CounterDays.setAttribute("id", "CounterDays");
        CounterDays.setAttribute("holder", "Days of life");
        CounterDays.setAttribute("counter", "3");
        CounterDays.setAttribute("total", "80");

        var ReturnButton = document.createElement('return-button');
        
        this.appendChild(MainProgres);
        this.appendChild(CounterYears);
        this.appendChild(CounterMonths);
        this.appendChild(CounterWeeks);
        this.appendChild(CounterDays);
        this.appendChild(ReturnButton);
    }
}