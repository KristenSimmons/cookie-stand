const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

<<<<<<< HEAD
const seattle = {
  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  sales: [],
  estimate: function() {
    this.sales = estimateSales(this);
  },
};

const tokyo = {
  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerSale: 1.2,
  sales: [],
  estimate: function() {
    this.sales = estimateSales(this);
  },
};

const dubai = {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerSale: 3.7,
  sales: [],
  estimate: function() {
    this.sales = estimateSales(this);
  },
};

const paris = {
  location: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerSale: 2.3,
  sales: [],
  estimate: function() {
    this.sales = estimateSales(this);
  },
};

const lima = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerSale: 4.6,
  sales: [],
  estimate: function() {
    this.sales = estimateSales(this);
  },
};

seattle.estimate();
tokyo.estimate();
dubai.estimate();
paris.estimate();
lima.estimate();

function estimateSales(store) {
  const sales = [];
  for(let i=0; i<hours.length; i++) {
    const numCustomers = randomInRange(store.minCustomers, store.maxCustomers);
    const hourSales = Math.ceil(numCustomers * store.avgCookiesPerSale);
    sales.push(hourSales);
  }
  return sales;
}
=======
<<<<<<< HEAD
// const containerElem = document.getElementById('salesData');
// const tableElem = document.createElement('table');
// containerElem.appendChild(tableElem);
const tableElem = document.getElementById('sales-table');

=======
>>>>>>> e944110b047ee7753d419c7e0584b38acab9724c
let grandTotal = 0;
>>>>>>> 7ffa4d1c95ca9dae2f5d7ad91b8e8cca73d58377

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const container = document.getElementById('root');

function render(store) {

  const cookieStandArticle = document.createElement('article');
  container.appendChild(cookieStandArticle);

  const heading = document.createElement('h2');
  cookieStandArticle.appendChild(heading);
  heading.textContent = store.location;

  const hoursList = document.createElement('ul');
  cookieStandArticle.appendChild(hoursList);

  let totalSold = 0;

  for(let i=0; i<store.sales.length; i++) {
    let salesItem = document.createElement('li');
    hoursList.appendChild(salesItem);
    let cookiesSoldThisHour = store.sales[i];
    totalSold += cookiesSoldThisHour;
    let salesInfo = `${hours[i]}: ${cookiesSoldThisHour} cookies`;
    salesItem.textContent = salesInfo;
  }
  const totalItem = document.createElement('li');
  hoursList.appendChild(totalItem);
  const totalInfo = `Total: ${totalSold} cookies sold`;
  totalItem.textContent = totalInfo;
}

<<<<<<< HEAD
render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);
=======
CookieStand.prototype.estimateSales = function() {
  const sales = [];
  for(let i=0; i<hours.length; i++) {
    const numCustomers = randomInRange(this.minCustomer,this.maxCustomer);
    const hourSales = Math.ceil(numCustomers * this.avgCookiesPerSale);
    sales.push(hourSales);
  }
  return sales;
};
<<<<<<< HEAD
=======


const containerElem = document.getElementById('salesData');
const tableElem = document.createElement('table');
containerElem.appendChild(tableElem);
tableElem.className = 'sales-table';

function renderTable (){
  renderHeaderRow(tableElem);
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();
  renderFooterRow(tableElem);
}

const seattle = new CookieStand('Seattle', 23, 65, 6.3);
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
const dubai = new CookieStand('Dubai', 11, 38, 3.7);
const paris =  new CookieStand('Paris', 20, 38, 3.7);
const lima =  new CookieStand('Lima', 2, 16, 4.6);

const cities = [seattle,tokyo,dubai,paris,lima];

function renderHeaderRow(tableElem){
  const row = document.createElement('tr');
  tableElem.appendChild(row);
  const cell = document.createElement('th');
  row.appendChild(cell);
  cell.textContent = 'Locations';
  for(let i=0; i<hours.length; i++) {
    const currentHour = hours[i];
    const currentHeaderCell = document.createElement('th');
    headerRow.appendChild(currentHeaderCell);
    currentHeaderCell.textContent = currentHour;
  }
  const totalCell = document.createElement('td');
  row.appendChild.apply(totalCell);
  totalCell.textContent = 'Location Totals';
}

CookieStand.prototype.render = function() {
  const row = document.createElement('tr');
  tableElem.appendChild(row);
  const cell = document.createElement('th');
  row.appendChild(cell);
  cell.textContent = this.location;
  for(let i=0; i<this.sales.length; i++) {
    const locationCell = document.createElement('th');
    row.appendChild(locationCell);
    locationCell.textContent = this.sales[i];
  }
  for(let i=0; i<this.sales.length; i++) {
    this.dailyTotalSum += this.sales[i];
    grandTotal += this.sales[i];
  }
  const totalDailyCell = document.createElement('td');
  row.appendChild(totalDailyCell)
  totalDailyCell.textContent = this.dailyTotalSum;
};

const headerRow = document.create('tr');
tableElem.appendChild(headerRow);

function renderFooterRow(tableElem){
  const row = document.createElement('tfoot');
  row.id = 'footerRowTotal';
  tableElem.appendChild(row);
  const cell = document.createElement('th');
  row.appendChild(cell);
  cell.textContent = 'Hourly Totals for All';
  for (let i=0; i<hours.length; i++){
    let hourlyTotals = 0;
    const totalCell = document.createElement('td');
    row.appendChild(totalCell);
    for (let k=0; k<cities.length; k++){
      hourlyTotals += cities[k].sales[i];
    }
    totalCell.textContent=  hourlyTotals;
  }
  const salesForAllLocations = document.createElement('td');
  row.appendChild(salesForAllLocations);
  salesForAllLocations.textContent = grandTotal;
}

console.log(grandTotal);

renderTable();





// const seattle = {
//   location: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookiesPerSale: 6.3,
//   sales: [],
//   estimate: function() {
//     this.sales = estimateSales(this);
//   },
// };

// const tokyo = {
//   location: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesPerSale: 1.2,
//   sales: [],
//   estimate: function() {
//     this.sales = estimateSales(this);
//   },
// };

// const dubai = {
//   location: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiesPerSale: 3.7,
//   sales: [],
//   estimate: function() {
//     this.sales = estimateSales(this);
//   },
// };

// const paris = {
//   location: 'Paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookiesPerSale: 2.3,
//   sales: [],
//   estimate: function() {
//     this.sales = estimateSales(this);
//   },
// };

// const lima = {
//   location: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiesPerSale: 4.6,
//   sales: [],
//   estimate: function() {
//     this.sales = estimateSales(this);
//   },
// };

// seattle.estimate();
// tokyo.estimate();
// dubai.estimate();
// paris.estimate();
// lima.estimate();

// function estimateSales(store) {
//   const sales = [];
//   for(let i=0; i<hours.length; i++) {
//     const numCustomers = randomInRange(this.minCustomer,this.maxCustomer);
//     const hourSales = Math.ceil(numCustomers * this.avgCookiesPerSale);
//     sales.push(hourSales);
//   }
//   return sales;
// }

// function randomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const container = document.getElementById('root');

// function render(store) {

//   const cookieStandArticle = document.createElement('article');
//   container.appendChild(cookieStandArticle);

//   const heading = document.createElement('h2');
//   cookieStandArticle.appendChild(heading);
//   heading.textContent = store.location;

//   const hoursList = document.createElement('ul');
//   cookieStandArticle.appendChild(hoursList);

//   let totalSold = 0;

//   for(let i=0; i<store.sales.length; i++) {
//     let salesItem = document.createElement('li');
//     hoursList.appendChild(salesItem);
//     let cookiesSoldThisHour = store.sales[i];
//     totalSold += cookiesSoldThisHour;
//     let salesInfo = `${hours[i]}: ${cookiesSoldThisHour} cookies`;
//     salesItem.textContent = salesInfo;
//   }
//   const totalItem = document.createElement('li');
//   hoursList.appendChild(totalItem);
//   const totalInfo = `Total: ${totalSold} cookies sold`;
//   totalItem.textContent = totalInfo;
// }

// render(seattle);
// render(tokyo);
// render(dubai);
// render(paris);
// render(lima);
>>>>>>> e944110b047ee7753d419c7e0584b38acab9724c

function renderTable (){
  renderHeaderRow(tableElem);
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();
  renderFooterRow(tableElem);
}

const seattle = new CookieStand('Seattle', 23, 65, 6.3);
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
const dubai = new CookieStand('Dubai', 11, 38, 3.7);
const paris =  new CookieStand('Paris', 20, 38, 3.7);
const lima =  new CookieStand('Lima', 2, 16, 4.6);

const cities = [seattle,tokyo,dubai,paris,lima];

function renderHeaderRow(tableElem){
  const row = document.createElement('tr');
  tableElem.appendChild(row);
  const cell = document.createElement('th');
  row.appendChild(cell);
  cell.textContent = 'Locations';
  for(let i=0; i<hours.length; i++) {
    const currentHour = hours[i];
    const currentHeaderCell = document.createElement('th');
    headerRow.appendChild(currentHeaderCell);
    currentHeaderCell.textContent = currentHour;
  }
  const totalCell = document.createElement('td');
  row.appendChild(totalCell);
  totalCell.textContent = 'Location Totals';
}

CookieStand.prototype.render = function() {
  const row = document.createElement('tr');
  tableElem.appendChild(row);
  const cell = document.createElement('th');
  row.appendChild(cell);
  cell.textContent = this.location;
  for(let i=0; i<this.sales.length; i++) {
    const locationCell = document.createElement('th');
    row.appendChild(locationCell);
    locationCell.textContent = this.sales[i];
  }
  for(let i=0; i<this.sales.length; i++) {
    this.dailyTotalSum += this.sales[i];
    grandTotal += this.sales[i];
  }
  const totalDailyCell = document.createElement('td');
  row.appendChild(totalDailyCell)
  totalDailyCell.textContent = this.dailyTotalSum;
};

const headerRow = document.createElement('tr');
tableElem.appendChild(headerRow);

function renderFooterRow(tableElem){
  const row = document.createElement('tfoot');
  row.id = 'footerRowTotal';
  tableElem.appendChild(row);
  const cell = document.createElement('th');
  row.appendChild(cell);
  cell.textContent = 'Hourly Totals for All';
  for (let i=0; i<hours.length; i++){
    let hourlyTotals = 0;
    const totalCell = document.createElement('td');
    row.appendChild(totalCell);
    for (let k=0; k<cities.length; k++){
      hourlyTotals += cities[k].sales[i];
    }
    totalCell.textContent=  hourlyTotals;
  }
  const salesForAllLocations = document.createElement('td');
  row.appendChild(salesForAllLocations);
  salesForAllLocations.textContent = grandTotal;
}

console.log(grandTotal);

renderTable();
>>>>>>> 7ffa4d1c95ca9dae2f5d7ad91b8e8cca73d58377
