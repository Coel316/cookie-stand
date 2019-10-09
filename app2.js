'use strict';

// var seattleStore = document.getElementById('seattleLocation');
// var tokyoStore = document.getElementById('tokyoLocation');
// var dubaiStore = document.getElementById('dubaiLocation');
// var parisStore = document.getElementById('parisLocation');
// var limaStore = document.getElementById('limaLocation');


function Store(location, min, max, avgCookie) {
  this.minimum = min;
  this.maximum = max;
  this.avgCookie = avgCookie;
  this.unitsSoldPerHour = [];
  this.location = location;

}
Store.prototype.randomNumber = function (min, max) {
  // min = Math.ceil(min);
  //max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function createHeaderRow () {
  //Grabbing the table element for header.
  var tableElement = document.getElementById('testTable');

  //Building your row element for header
  var rowElement = document.createElement('tr');

  // made an empty cell
  var emptyCell = document.createElement('th');
  rowElement.appendChild(emptyCell);

  for (var i = 0; i < shopHours.length; i++) {
    var rowElementData = document.createElement('th');
    rowElementData.textContent = shopHours[i];
    rowElement.appendChild(rowElementData);

  }
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

  for (var i = 0; i < shopHours.length; i++) {
    var cookiesSold = Math.floor(this.randomNumber(this.minimum, this.maximum) * this.avgCookie);

    // console.log('MIN',this.minimum);
    // console.log('MAX',this.maximum);
    // console.log('AVERAGE',this.avgCookie);
    // console.log('COOKIES SOLD:',cookiesSold);

    this.unitsSoldPerHour.push(cookiesSold);

    var rowElementData = document.createElement('td');
    rowElementData.textContent = cookiesSold;
  
    rowElement.appendChild(rowElementData);

    // var childEl = document.createElement('tr');
    // childEl.textContent = ` ${shopHours[i]}: ${cookiesSold} cookies`;
    // this.location.appendChild(childEl);
  }


  //   // frying pan
  //   var rowElementData2 = document.createElement('td');
  //   rowElementData2.textContent = "Frying pan";
  //   rowElement.appendChild(rowElementData2);


  //   // kitchen knife
  //   var rowElementData3 = document.createElement('td');
  //   rowElementData3.textContent = "Kitchen knife";
  //   rowElement.appendChild(rowElementData3);




  //   // rowElement
  //   //Filling your row element with info
  //   // rowElement.textContent = "HELLO WORLD"

  //Adding row to the table
  tableElement.appendChild(rowElement);

};

createHeaderRow();

// Seattle store
var seattleMarketplace = new Store('Seattle', 23, 65, 6.3);

seattleMarketplace.render();
// console.log(seattleMarketplace.render());

// Tokyo store
var tokyoMarketplace = new Store('Tokyo', 3, 24, 1.2);

tokyoMarketplace.render();
// console.log(tokyoMarketplace.render());

// Dubai Store

var dubaiMarketplace = new Store('Dubai', 11, 38, 3.7);

dubaiMarketplace.render();
// console.log(dubaiMarketplace.render());

// Paris Store

var parisMarketplace = new Store('Paris', 20, 38, 2.3);

parisMarketplace.render();
// console.log(parisMarketplace.render());

// Lima Store

var limaMarketplace = new Store('Lima', 2, 16, 4.6);

limaMarketplace.render();
// console.log(limaMarketplace.render());

