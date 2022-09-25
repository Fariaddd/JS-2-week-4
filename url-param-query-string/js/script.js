// select the container

const container = document.getElementById("container");

// values of m query string

const firstName = "Fariad";
const lastName = "Yousef";

console.log(firstName);
console.log(lastName);
container.innerHTML += `<a href="index.html?firstName=${firstName}&lastName=${lastName}">Submit</a> `

// create anchor tag

const newLink = document.createElement("a");
console.log(newLink);


newLink.href = `https://www.example.com/?firstName=${firstName}&lastName=${lastName}`;
console.log(newLink);

// add inner text to the anchor i created
newLink.textContent = "Submit"
console.log(newLink);

// add the new link to the container div

container.appendChild(newLink);

// console.log(window);
// console.log(window.location);
// console.log(window.location.search);


const parameterString = window.location.search;

console.log(parameterString);

const params = new URLSearchParams(parameterString);

console.log(params);

for(const param of params){
    console.log(param);
}
console.log(params.get("firstName"));

console.log(params.get("lastName"));

