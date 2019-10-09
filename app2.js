var seattleStore = document.getElementById('seattleLocation');
var tokyoStore = document.getElementById('tokyoLocation');
var dubaiStore = document.getElementById('dubaiLocation');
var parisStore = document.getElementById('parisLocation');
var limaStore = document.getElementById('limaLocation');


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

Store.prototype.render = function () {
  for (var i = 0; i < shopHours.length; i++) {
    var cookiesSold = Math.floor(this.randomNumber(this.minimum, this.maximum) * this.avgCookie);

    // console.log('MIN',this.minimum);
    // console.log('MAX',this.maximum);
    // console.log('AVERAGE',this.avgCookie);
    // console.log('COOKIES SOLD:',cookiesSold);

    this.unitsSoldPerHour.push(cookiesSold);
    var childEl = document.createElement('tr');
    childEl.textContent = ` ${shopHours[i]}: ${cookiesSold} cookies`;
    this.location.appendChild(childEl);
  }

};

// Seattle store
var seattleMarketplace = new Store(seattleStore, 23, 65, 6.3);

seattleMarketplace.render();
console.log(seattleMarketplace.render());

// Tokyo store
var tokyoMarketplace = new Store(tokyoStore, 3, 24, 1.2);

tokyoMarketplace.render();
console.log(tokyoMarketplace.render());

// Dubai Store

var dubaiMarketplace = new Store(dubaiStore, 11, 38, 3.7);

dubaiMarketplace.render();
console.log(dubaiMarketplace.render());

// Paris Store

var parisMarketplace = new Store(parisStore, 20, 38, 2.3);

parisMarketplace.render();
console.log(parisMarketplace.render());

// Lima Store

var limaMarketplace = new Store(limaStore, 2, 16, 4.6);

limaMarketplace.render();
console.log(limaMarketplace.render());
