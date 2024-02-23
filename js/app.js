const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let grandTotal = 0;

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookieStand(location,minCustomer,maxCustomer,avgCookiesPerSale) {
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.sales = this.estimateSales();
  this.dailyTotalSum = 0;
}

CookieStand.prototype.estimateSales = function() {
  const sales = [];
  for(let i=0; i<hours.length; i++) {
    const numCustomers = randomInRange(this.minCustomer,this.maxCustomer);
    const hourSales = Math.ceil(numCustomers * this.avgCookiesPerSale);
    sales.push(hourSales);
  }
  return sales;
};

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
