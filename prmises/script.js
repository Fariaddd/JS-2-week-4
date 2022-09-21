// promises

let statusMessageWrapper = document.getElementById("status-message");
console.log(statusMessageWrapper);


fetch("https://jsonplaceholder.typicode.com/todos/1")

  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    statusMessageWrapper.innerHTML = "loaded thank hou success"
  })
  .catch((error) => {
    console.log(error);
    statusMessageWrapper.innerHTML = "sorry something wrng happend"
  })
  .finally(()=>{
    console.log("loaddeddd");
  })
  
  