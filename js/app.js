const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  sales: [],
  estimate: simulateSales,
};

function simulateSales() {
  seattle.sales = [6,7,8,9,10,11,12,1,2,3,4,5,6,7];
}

seattle.estimate();

let container = document.getElementById('root');

// NEED AN ARTICLE PER COOKIE STAND 
let cookieStandArticle = document.createElement('article');
container.appendChild(cookieStandArticle);

let heading = document.createElement('h2');
cookieStandArticle.appendChild(heading);
heading.textContent = seattle.location;

let hoursList = document.createElement('ul');
cookieStandArticle.appendChild(hoursList);

let totalSold = 0;

for(let i=0; i<seattle.sales.length; i++) {
  let salesItem = document.createElement('li');
  hoursList.appendChild(salesItem);
  let cookiesSoldThisHour = seattle.sales[i];
  totalSold += cookiesSoldThisHour;
  let salesInfo = `${hours[i]}: ${cookiesSoldThisHour} cookies`;
  salesItem.textContent = salesInfo;
}

const totalItem = document.createElement('li');
hoursList.appendChild(totalItem);
const totalInfo = `Total: ${totalSold} cookies sold`;
totalItem.textContent = totalInfo;





