// promises

let statusMessageWrapper = document.getElementById("status-message");
//console.log(statusMessageWrapper);


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
  //___________________________


  
//   const myPromise = new Promise((resolve, reject) => {
//     // We are hardcoding a value for this example
//     const shouldResolve = true;
//     if (shouldResolve) {
//       // If the code inside of the promise was able to do what
//       // it needed to do, then it will call this 'resolve' callback
//       resolve('Promise resolved successfully.');
//     } else {
//       // If the code inside of the promise failed to do what
//       // it needed to do then it will call this 'reject' callback
//       reject('Promise has failed');
//     }
//   });
  
//   myPromise.then((result) => {
//     // Logs either the 'resolve' or 'reject' returns based on
//     // whether the promise succeeded or failed
//     console.log(result);
//   });
//_________________________


// fetch('abc')
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   // An error is going to be thrown causing the code below
//   // to run
//   .catch((error) => {
//     console.log('An error has been thrown');
//     console.log(error);
    

//   });


  const promise = new Promise(function (resolve, reject) {
    const string1 = "geeksforgeeks";
    const string2 = "geeksforgeeks";
    if (string1 === string2) {
        resolve();
    } else {
         reject();
    }
  });
 
  promise
    .then(function () {
      console.log("Promise resolved successfully");
    })
    .catch(function () {
      console.log("Promise is rejected");
      
      

    });

    
