/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.


//This variable goes to the html document and looks for something called freelancers.
//We know this because the # selects for a unique element with the name freelancers
const freelancerList = document.querySelector("#freelancers");

//Keeps count and updates the average as data is generated and rendered//
const priceSpan = document.querySelector("#avg-price");

//Data that is rendered immediately, prior to genereated data//
const freelancers = [
  
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
];

//Data that is genereated and rendered at timed intervals//
const name = ["Waldo", "Tony", "Matt"];
const price = [100, 200, 78];
const occupation = ["welder", "pilot", "hairdresser"];
const limit = 10;






//remove the interval after 10 added
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

render();
//calling the function now, renders the initial state


function render() {
//This function displays the freelancers we have



 const listings = freelancers.map((person) => {
  //This variable holds an array created by the map method being used on freelancers array. 
  //This map method will iterate over each person(freelancer)
 
 const newListing = document.createElement("li");
//and create a new new paragraph that wil get added to the html

 newListing.innerText = `Name: ${person.name} Price: $${person.price} Occupation: ${person.occupation} `;

 //the innertext of this paragraph will contain information gleaned from the loop 
 //initiated by the map method on the freelancers object
;
console.log(newListing)
 return newListing;

 //Now we return the paragraph that goes into the array listings. 
 //So for this function the input was an array and the output was an array.
 //But all we've done is create an array with paragraph tags inside.
 //In order to render the infromation to the webpage we need to...
 
 
  });


 freelancerList.replaceChildren(...listings);

 //Pass in each node/paragraph using the replaceChildren method. We use the spread operator 
 //because replaceChildren can't take an array, it takes the invdivdual items. So the spread
 //operator allows us to pass in listing as an argument to .replaceChildren.

}

//We now need to generate new freelancers
//We already have a function which displays them to the screen (render) after mapping them from
//the freelancers array.
//So now we need to add any new freelancers so that render can display them for us
//after a specified amount of time/timed interval (handled by the setIntervalId const)
    //We need an array of names, occupations, prices
    //Then we need to create an object from a random selection from names, occupations, prices
      //Then add that new object to freelancers



function addFreelancer() {
 
//array for names created at top of page

const newFreelancer = {
  name: name[Math.floor(Math.random() * name.length)],
  //Math.floor removes decimals from number return from Math.random
  //Math.random returns 0-2.99
    //So if the length of the array is, 3 - it's going to give us a random number between
        //0 and 2(Math.floor will remove any decimals)
        //Remember, we don't add a plus one because we don't want to access an array at
        //the 3rd index because we would be accessing an element that doesn't exist
  price: price[Math.floor(Math.random() * price.length)],
  occupation: occupation[Math.floor(Math.random() * occupation.length)],

};


//As of now, we have an object with the results of randomly generated new freelancer
//elements.
//But this newFreelancer object is still independent from the inital freelancer array
//We need to merge the two

freelancers.push(newFreelancer);

//We now need to ensure that the average price gets updated with each additional listing
//We create the logic to facilitate this process

const priceAverage = freelancers.reduce(
  (total, currentItem) => (total += currentItem.price), 0
)/freelancers.length;

//Then we render this logic to the html through the use of the DOM 
//We previously captured the average price span with a queryselector, now
//all we have to do is use the innerText method to insert the updated information and limit
//the resulting values to 2 decimal places

priceSpan.innerText = priceAverage.toFixed(2);



  render();


//When list reaches 10 freelancers, stop populating list

  if(freelancers.length >= limit){
  clearInterval(addFreelancerIntervalId);
  
  
  
};
}

