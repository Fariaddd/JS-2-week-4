

// fect takes 2 arguments, fist one is URL(API) and the second one is an abject

//fetch(""{})


// fetch("",{})
console.log(fetch("https://reqres.in/api/users"))




fetch("https://noroffcors.herokuapp.com/https://reqres.in/api/users", {
    method: "POST",
    headers :{
        "Content-Type": "application/json"
    },
    body : JSON.stringify({name:"Kevin"})
})
    // .then(res => console.log(res))
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS");
            return res.json();
        } else {s
            console.log("NOT SUCCESSFUL");
        }
    })
    // .then(res => res.json())
    .then(jsonResponse => console.log(jsonResponse))
    .catch(err => console.log(err))


