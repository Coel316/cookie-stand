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
var randomNumber = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
console.log("Testing the generator: " + randomNumber(3, 50));

var parentEl = document.getElementById('parentElement');

var artShop = {
    shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
    min: 5,
    max: 120,
    avgCookies: 10,
    unitsSoldPerHour: [],
    locationName: 'Dubai Marketplace',
    
    render: function(){
        for (var i = 0; i < this.shopHours.length; i++) {
            artShop.unitsSoldPerHour.push((randomNumber(artShop.min, artShop.max)*artShop.avgCookies));
            var childEl = document.createElement('li');
            childEl.textContent = ` ${this.shopHours[i]}: ${this.unitsSoldPerHour[i]} cookies`;
            parentEl.appendChild(childEl);
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
artShop.render();

