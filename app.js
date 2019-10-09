/*
 //example of what we did in class on 10-7-2019
var parentEl = document.getElementById('parentElement')

var child = document.createElement('h1')
child.textContent = 'proof of life';

var iceCreamShop = {
    shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

    hourTotals: [12, 32, 24, 56, 37, 26, 38, 16, 38, 26, 13, 25, 36, 24]
    locationName: 'Pike Place Market';
}
*/
//////////////////////////////////////////////////////////////   
//     var totals = sum[10, 20, 30, 40] // sums to 100      //   
//     var sum = 0;                                         //
//     for (var i = 0; i < numbers.length; i++) {           //
//     sum += numbers[i]                                    //
// }                                                        //
//////////////////////////////////////////////////////////////


// console.log("Testing the generator: " + randomNumber(3, 50));

var randomNumber = function (min, max) {
  // min = Math.ceil(min);
  //max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Seattle store

var seattleStore = document.getElementById('seattleLocation');

var seattle = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 23,
  max: 65,
  avgCookie: 6.3,
  unitsSoldPerHour: [],
  locationName: 'seattle ',


  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var cookiesSold = Math.floor(randomNumber(seattle.min, seattle.max) * seattle.avgCookie)
      seattle.unitsSoldPerHour.push(cookiesSold);
      var childEl = document.createElement('li');
      childEl.textContent = ` ${this.shopHours[i]}: ${this.unitsSoldPerHour[i]} cookies`;
      seattleStore.appendChild(childEl);
    }

    //1. var firstShopHour = artShop.shopHours[0]s
    //2. var firstUnitSoldPerHour = artShop.unitsSoldPerHour[0]

    //Binder <ul> </ul>
    //Access the element on HTML markup
    //3. var unorderedListEl = document.getElementById('parentElement');

    //Pages <li> </li>
    //Create the list item element
    //4. var listItemEl = document.createElement('li');
    //Update the content of the element we created
    //5. listItemEl.textContent = firstShopHour + ' : ' + firstUnitSoldPerHour + ' cookies ';


    // Add to the house
    //    Binder          PutIn(Pages)
    //6. unorderedListEl.appendChild(listItemEl); 


    // console.log('BINDER:  ', unorderedListEl);
    // console.log('PAGE:  ', listItemEl);

  }

}

function render(locationObject, element) {


  return
}

render(seattle, seattleStore);

seattle.render();

//Tokyo Shore

var tokyoStore = document.getElementById('tokyoLocation');

var Tokyo = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 3,
  max: 24,
  avgCookie: 1.2,
  unitsSoldPerHour: [],
  locationName: 'Tokyo ',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var cookiesSold = Math.floor(randomNumber(Tokyo.min, Tokyo.max) * Tokyo.avgCookie)
      Tokyo.unitsSoldPerHour.push(cookiesSold);
      var childEl = document.createElement('li');
      childEl.textContent = ` ${this.shopHours[i]}: ${this.unitsSoldPerHour[i]} cookies`;
      tokyoStore.appendChild(childEl);
    }

  }

}
Tokyo.render();

// Dubai Store

var dubaiStore = document.getElementById('dubaiLocation');

var Dubai = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 11,
  max: 38,
  avgCookie: 3.7,
  unitsSoldPerHour: [],
  location: 'Dubai',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var cookiesSold = Math.floor(randomNumber(Dubai.min, Dubai.max) * Dubai.avgCookie)
      Dubai.unitsSoldPerHour.push(cookiesSold);
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.unitsSoldPerHour[i]} cookies`;
      dubaiStore.appendChild(childEl);
    }
  }
}

Dubai.render();

// Paris Store

var parisStore = document.getElementById('parisLocation');

var Paris = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 20,
  max: 38,
  avgCookie: 2.3,
  unitsSoldPerHour: [],
  location: 'Paris',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var cookiesSold = Math.floor(randomNumber(Paris.min, Paris.max) * Paris.avgCookie)
      Paris.unitsSoldPerHour.push(cookiesSold);
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.unitsSoldPerHour[i]} cookies`;
      parisStore.appendChild(childEl);
    }
  }
}

Paris.render();

// Lima Store

var limaStore = document.getElementById('limaLocation');
var Lima = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  min: 2,
  max: 16,
  avgCookie: 4.6,
  unitsSoldPerHour: [],
  location: 'Lima',
  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var cookiesSold = Math.floor(randomNumber(Lima.min, Lima.max) * Lima.avgCookie)
      Lima.unitsSoldPerHour.push(cookiesSold);
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.unitsSoldPerHour[i]} cookies`;
      limaStore.appendChild(childEl);
    }
  }
}

Lima.render();