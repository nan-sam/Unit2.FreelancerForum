/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const freelancers = [
  
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
];

const names = freelancers.map(freelancers => freelancers.name);
const prices = freelancers.map(freelancers => freelancers.price);
const occupations =freelancers.map(freelancers => freelancers.occupation);

const availableFreelancers = [
  {
  name: "Dr. Slice",
  price: 25,
  occupation: "gardener",
},
];


const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

render();


function render() {
 const freeLancerList = document.querySelector("#freelancers");
 const listings = freelancers.map((person) => {
 const newListing = document.createElement("p");
 newListing.innerText = `Name: ${person.name} Occupation: ${person.occupation} Price: $${person.price}`;
 return newListing;


  });
 freeLancerList.replaceChildren(...listings)
}



function addFreelancer() {
 
 const name = names[Math.floor(Math.random() * names.length)];
 const price = prices[Math.floor(Math.random() * prices.length)];
 const occupation = occupations[Math.floor(Math.random() * occupations.length)];

availableFreelancers.push({name, price, occupation});


  render();
  
  
}
