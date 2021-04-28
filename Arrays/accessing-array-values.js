const food = ['apple', 'pizza', 'pear']

console.log(food[1]);

let donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]);

donuts[1] = "glazed cruller"; // changes the second element in the `donuts` array to "glazed cruller"
console.log(donuts[1]); //will only print array element 1 glazed cruller

donuts = ["glazed", "chocolate frosted", "Boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];
donuts[2] = "cinnamon twist"; //replaces Boston cream
donuts[4] = "salted caramel"; //rplaces sprinkled
donuts[5] = "shortcake eclair"; //replaces maple

console.log(donuts) //will print all donuts and changes

let pies = ["steak", "mince", "curry", "potato top"];
pies.splice(1, 1, "veggie", "apple"); //first 1 adds "veggie" at index 1

// then second 1 removes "mince" which is at index 1 after the "veggie" pie which we just added and replaces it with "apple"

console.log(pies)

pies.splice(1, 0, 'blueberry', 'salt n pepper'); //1 blueberry again just adds blueberry at index 1 and pushes the other pies futher down the index.
//index 0 just adds salt n pepper after blueberry without removing another pie

console.log(pies)

let burger = ["beef", "chicken", "bacon", "vegan", "fish", "doublebeef"];

burger.splice(-2, 0, "salmon", "cheeseburger"); //- 2 "salmon" starts its count from the end and is then added, without replacing anything
//then 0, cheeseburger is added without removing a burger


console.log(burger)

let newCars = ['Jaguar', 'Ferrari', 'Audi'];

console.log(newCars[1]);

newCars[1] = 'BMW'

console.log(newCars[1]);

newCars = 'Mclaren'

console.log(newCars);

newVideoGames = ['Gran Turismo', 'Battlefield', 'Call Of Duty', 'PUBG']

console.log(newVideoGames.length);
//.length returns number of items in the array, which = 4, so prints 4

newVideoGames.push('FortNite', 'Tekken')
//.push adds items to end of arrays
console.log(newVideoGames)



newVideoGames.pop()
//Removes the last item

console.log(newVideoGames)

newVideoGames.shift()
//Removes this first item

console.log(newVideoGames)

newVideoGames.unshift('CounterStrike')
//Adds a first item

console.log(newVideoGames)

newVideoGames.slice(0, 5)

console.log(newVideoGames[2]);
//Inputs the item associated with the item number

const pubgIndex = newVideoGames.indexOf('PUBG')
//Have to make a new var to = ...indexof(placeitemnamehere) to get the item number in which the item is placed
console.log(pubgIndex) // in this case pubg is item number 3


const differentContinents = [['NZ', 'Aus'], ['US', 'Canada'], ['China', 'Japan']];

console.log(differentContinents[1]);
//pulls out the items associated with the item number presented - in this case item 1 is 'US, Canada.

console.log(differentContinents[1][0]);
//pulls the US from item 1

//below does the same thing, prints AUS
const targetCountry = differentContinents[0][1];

console.log(targetCountry)

let prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 1.80
prices[2] = 95.62
prices[6] = 11.57

console.log(prices)