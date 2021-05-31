"use strict"

let staticHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function randomCustomerPerHour(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
let locationArray = [];
let totalSalePerHour = []
let totalAllLocation = 0

function LocationSale(name, minCust, maxCust, averageCookiesPerCustomer) {
    this.name = name,
        this.minCust = minCust,
        this.maxCust = maxCust,
        this.averageCookiesPerCustomer = averageCookiesPerCustomer,
        this.totalSales = 0,
        this.cookiesPerHour = []

}


LocationSale.prototype.setCookiesPerHour = function() {
    this.sales = []
    for (let i = 0; i < staticHours.length; i++) {
        this.cookiesPerHour[i] = Math.floor(this.averageCookiesPerCustomer * randomCustomerPerHour(this.maxCust, this.minCust))
        this.totalSales += this.cookiesPerHour[i];
        this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} `;
    }

    this.cookiesPerHour[this.cookiesPerHour.length] = this.totalSales
    locationArray[locationArray.length] = this;
    console.log(locationArray);
}


function render() {
    var divTable = document.getElementById("table")
    var tableTag = document.createElement("table")
    let tr = document.createElement("tr")
    let th = document.createElement("th")
    th.appendChild(document.createTextNode('location'))
    tr.appendChild(th);
    tableTag.appendChild(tr);
    for (let i = 0; i < staticHours.length; i++) {
        let th = document.createElement("th")
        th.appendChild(document.createTextNode(staticHours[i]))
        tr.appendChild(th);
    }
    let thTotal = document.createElement("th")
    thTotal.textContent = "Daily Location Total"
    tr.appendChild(thTotal);
    divTable.appendChild(tableTag);


    for (let i = 0; i < locationArray.length; i++) {
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        td.appendChild(document.createTextNode(locationArray[i].name))
        tr.appendChild(td);
        tableTag.appendChild(tr);
        for (let j = 0; j < staticHours.length + 1; j++) {

            let td = document.createElement("td")
            td.appendChild(document.createTextNode(`${locationArray[i].cookiesPerHour[j]}`))
            tr.appendChild(td);

        }
    }

    let trTotalHours = document.createElement("tr")
    let tdTotalHours = document.createElement("td")
    tdTotalHours.appendChild(document.createTextNode("Total Per Hour"))
    trTotalHours.appendChild(tdTotalHours);
    tableTag.appendChild(trTotalHours);
    for (let i = 0; i < staticHours.length; i++) {

        totalSalePerHour[i] = 0
        for (let j = 0; j < locationArray.length; j++) {

            totalSalePerHour[i] = totalSalePerHour[i] + locationArray[j].cookiesPerHour[i]
        }
        totalAllLocation = totalAllLocation + totalSalePerHour[i];
        let td = document.createElement("td")
        td.appendChild(document.createTextNode(`${totalSalePerHour[i]}`))
        trTotalHours.appendChild(td);
    }
    let td = document.createElement("td")
    td.appendChild(document.createTextNode(`${totalAllLocation}`))
    trTotalHours.appendChild(td);

}

let Seattle = new LocationSale("Seattle", 15, 25, 6.2)
let Tokyo = new LocationSale("Tokyo", 10, 24, 3.3)
let Dubai = new LocationSale("Dubai", 20, 30, 4.3)
let Paris = new LocationSale("Paris", 14, 24, 2.3)
let Lima = new LocationSale("Lima", 20, 29, 2.6)

Seattle.setCookiesPerHour()
Tokyo.setCookiesPerHour()
Dubai.setCookiesPerHour()
Paris.setCookiesPerHour()
Lima.setCookiesPerHour()

render()