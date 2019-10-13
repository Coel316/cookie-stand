'use strict';

var allStores = [];
var totalPerHour = [];
var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log('event.target.inputStoreName.value: ', event.target.inputStoreName.value);
  console.log('event.target.inputMaximumCustomers.value: ', event.target.inputMinimumCustomers.value);

  var onSubmitStoreName = event.target.inputStoreName.value;
  var onSubmitMinimumCustomers = event.target.inputMinimumCustomers.value;
  var onSubmitMaximumCustomers = event.target.inputMaximumCustomers.value;
  var onSubmitAverageCookie = event.target.inputAverageCookie.value;

  if (isNaN(onSubmitMinimumCustomers)) {
    alert('Minimum customer should be a number');
    event.target.inputMinimumCustomers.value = null;
    // event.target.inputMaximumCustomers.value = null;
    // event.target.inputAverageCustomers.value = null;
  }
  alert(`Store name you entered is: ${onSubmitStoreName} , minimum customers: ${onSubmitMinimumCustomers} , maximum customers: ${onSubmitMaximumCustomers} , Average Cookies: ${onSubmitAverageCookie}`);
}

function Store(location, min, max, avgCookie) {
  this.minimum = min;
  this.maximum = max;
  this.avgCookie = avgCookie;
  this.unitsSoldPerHour = [];
  this.location = location;
  this.totalCookiesSoldDaily = 0;

  this.calculateTotalCookiesSoldDaily = function () {

    var array = this.unitsSoldPerHour;
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total = total + array[i];
    }
    this.totalCookiesSoldDaily = total;
  };

  allStores.push(this);

}

function calculateTotalPerHour() {
  for (var i = 0; i < shopHours.length; i++) {

    var verticalTotal = 0;
    for (var j = 0; j < allStores.length; j++) {

      verticalTotal = verticalTotal + allStores[j].unitsSoldPerHour[i];
    }
    totalPerHour.push(verticalTotal);
  }
}

Store.prototype.randomNumber = function (min, max) {
  // min = Math.ceil(min);
  //max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function createHeaderRow() {
  //Grabbing the table element for header.
  var tableElement = document.getElementById('testTable');

  //Building your row element for header
  var rowElement = document.createElement('tr');

  // made an empty cell
  var emptyCell = document.createElement('th');
  var storeTotalHeader = document.createElement('th');

  storeTotalHeader.textContent = 'Daily Total';

  rowElement.appendChild(emptyCell);

  for (var i = 0; i < shopHours.length; i++) {
    var rowElementData = document.createElement('th');
    rowElementData.textContent = shopHours[i];
    rowElement.appendChild(rowElementData);
  }

  rowElement.appendChild(storeTotalHeader);
  tableElement.appendChild(rowElement);
}

Store.prototype.render = function () {

  //Grabbing the table element from HTML
  var tableElement = document.getElementById('testTable');
  // console.log('TABLE ELEMENT: ', tableElement);

  //Building your row element
  var rowElement = document.createElement('tr');
  // console.log('ROW ELEMENT: ', rowElement);

  // Section of data to display 5 stores on left side
  var storeLocationData = document.createElement('td');
  storeLocationData.textContent = this.location;
  rowElement.appendChild(storeLocationData);


  //getSalesForTheDay
  for (var i = 0; i < shopHours.length; i++) {
    var cookiesSold = Math.floor(this.randomNumber(this.minimum, this.maximum) * this.avgCookie);

    this.unitsSoldPerHour.push(cookiesSold);

    var rowElementData = document.createElement('td');
    rowElementData.textContent = cookiesSold;

    rowElement.appendChild(rowElementData);

    // var childEl = document.createElement('tr');
    // childEl.textContent = ` ${shopHours[i]}: ${cookiesSold} cookies`;
    // this.location.appendChild(childEl);

  }

  //Adding row to the table
  tableElement.appendChild(rowElement);

  this.calculateTotalCookiesSoldDaily();

  //Create <td> for totals

  var totalsForEachStore = document.createElement('td');
  totalsForEachStore.textContent = this.totalCookiesSoldDaily;
  rowElement.appendChild(totalsForEachStore);

};

function createFooterRow(){

  var tableElement = document.getElementById('testTable');
  var footerRow = document.createElement('tr');

  var footerTitle = document.createElement('td');
  footerTitle.textContent = 'Hourly Total';

  footerRow.appendChild(footerTitle);

  for (var i = 0; i < totalPerHour.length; i++){
    var footerData = document.createElement('td');

    footerData.textContent = totalPerHour[i];

    footerRow.appendChild(footerData);
  }

  //Add all totals together and add to final cell

  //Store Totals

  var companySalesTotalData = document.createElement('td');
  
  companySalesTotalData.textContent = calculateTotalCookiesSoldForCompany();

  footerRow.appendChild(companySalesTotalData);

  tableElement.appendChild(footerRow);
}

function calculateTotalCookiesSoldForCompany(){
  var total = 0;
  for (var i = 0; i < allStores.length; i++){
    total = total + allStores[i].totalCookiesSoldDaily;
  }
  return total;
}


createHeaderRow();

// Seattle store
var seattleMarketplace = new Store('Seattle', 23, 65, 6.3);
var tokyoMarketplace = new Store('Tokyo', 3, 24, 1.2);
var dubaiMarketplace = new Store('Dubai', 11, 38, 3.7);
var parisMarketplace = new Store('Paris', 20, 38, 2.3);
var limaMarketplace = new Store('Lima', 2, 16, 4.6);

for (var i = 0; i < allStores.length; i++){
  allStores[i].render();
}




calculateTotalPerHour();
createFooterRow();
