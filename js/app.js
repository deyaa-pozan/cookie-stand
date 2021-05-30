"use strict"

let staticHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function randomCustomerPerHour(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


let Seattle = {
    name: "Seattle",
    minCust: 23,
    maxCust: 65,
    averageCookiesPerCustomer: 6.3,


    setCookiesPerHour: function() {
        let totalSales = 0;
        this.cookiesPerHour = []
        this.sales = []
        for (let i = 0; i < staticHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.averageCookiesPerCustomer * randomCustomerPerHour(this.maxCust, this.minCust))
            totalSales += this.cookiesPerHour[i];
            this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
        this.sales[staticHours.length] = `total sales : ${totalSales} cookies`;

    },

    render: function() {

        let nameId = document.getElementById(this.name)
        let ul = document.createElement("ul")
        let daily = document.createElement("h2")
        let dailySales = document.getElementById(this.name + "Daily")
        for (let i = 0; i < staticHours.length; i++) {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(this.sales[i]))
            ul.appendChild(li)

        }
        nameId.appendChild(ul);
        dailySales.textContent = this.sales[this.sales.length - 1]
    }

}
Seattle.setCookiesPerHour()
Seattle.render()


let Tokyo = {
    name: "Tokyo",
    minCust: 3,
    maxCust: 24,
    averageCookiesPerCustomer: 6.3,


    setCookiesPerHour: function() {
        let totalSales = 0;
        this.cookiesPerHour = []
        this.sales = []
        for (let i = 0; i < staticHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.averageCookiesPerCustomer * randomCustomerPerHour(this.maxCust, this.minCust))
            totalSales += this.cookiesPerHour[i];
            this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
        this.sales[staticHours.length] = `total sales : ${totalSales} cookies`;

    },

    render: function() {

        let nameId = document.getElementById(this.name)
        let ul = document.createElement("ul")
        let daily = document.createElement("h2")
        let dailySales = document.getElementById(this.name + "Daily")
        for (let i = 0; i < staticHours.length; i++) {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(this.sales[i]))
            ul.appendChild(li)

        }
        nameId.appendChild(ul);
        dailySales.textContent = this.sales[this.sales.length - 1]
    }

}
Tokyo.setCookiesPerHour()
Tokyo.render()


let Dubai = {
    name: "Dubai",
    minCust: 11,
    maxCust: 38,
    averageCookiesPerCustomer: 6.3,


    setCookiesPerHour: function() {
        let totalSales = 0;
        this.cookiesPerHour = []
        this.sales = []
        for (let i = 0; i < staticHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.averageCookiesPerCustomer * randomCustomerPerHour(this.maxCust, this.minCust))
            totalSales += this.cookiesPerHour[i];
            this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
        this.sales[staticHours.length] = `total sales : ${totalSales} cookies`;

    },

    render: function() {

        let nameId = document.getElementById(this.name)
        let ul = document.createElement("ul")
        let daily = document.createElement("h2")
        let dailySales = document.getElementById(this.name + "Daily")
        for (let i = 0; i < staticHours.length; i++) {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(this.sales[i]))
            ul.appendChild(li)

        }
        nameId.appendChild(ul);
        dailySales.textContent = this.sales[this.sales.length - 1]
    }

}
Dubai.setCookiesPerHour()
Dubai.render()


let Paris = {
    name: "Paris",
    minCust: 20,
    maxCust: 38,
    averageCookiesPerCustomer: 6.3,


    setCookiesPerHour: function() {
        let totalSales = 0;
        this.cookiesPerHour = []
        this.sales = []
        for (let i = 0; i < staticHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.averageCookiesPerCustomer * randomCustomerPerHour(this.maxCust, this.minCust))
            totalSales += this.cookiesPerHour[i];
            this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
        this.sales[staticHours.length] = `total sales : ${totalSales} cookies`;

    },

    render: function() {

        let nameId = document.getElementById(this.name)
        let ul = document.createElement("ul")
        let daily = document.createElement("h2")
        let dailySales = document.getElementById(this.name + "Daily")
        for (let i = 0; i < staticHours.length; i++) {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(this.sales[i]))
            ul.appendChild(li)

        }
        nameId.appendChild(ul);
        dailySales.textContent = this.sales[this.sales.length - 1]
    }

}
Paris.setCookiesPerHour()
Paris.render()

let Lima = {
    name: "Lima",
    minCust: 2,
    maxCust: 16,
    averageCookiesPerCustomer: 6.3,


    setCookiesPerHour: function() {
        let totalSales = 0;
        this.cookiesPerHour = []
        this.sales = []
        for (let i = 0; i < staticHours.length; i++) {
            this.cookiesPerHour[i] = Math.floor(this.averageCookiesPerCustomer * randomCustomerPerHour(this.maxCust, this.minCust))
            totalSales += this.cookiesPerHour[i];
            this.sales[i] = `${staticHours[i]}: ${this.cookiesPerHour[i]} cookies`;
        }
        this.sales[staticHours.length] = `total sales :${totalSales} cookies`;

    },

    render: function() {

        let nameId = document.getElementById(this.name)
        let ul = document.createElement("ul")
        let daily = document.createElement("h2")
        let dailySales = document.getElementById(this.name + "Daily")
        for (let i = 0; i < staticHours.length; i++) {
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(this.sales[i]))
            ul.appendChild(li)

        }
        nameId.appendChild(ul);
        dailySales.textContent = this.sales[this.sales.length - 1]
    }

}
Lima.setCookiesPerHour()
Lima.render()