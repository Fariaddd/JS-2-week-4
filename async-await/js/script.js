// async function kitchen(){
//     try{
//         await abc;
//     } catch (error){
//         console.log("abs does not exist", error);
//     } finally {
//         console.log("runs code anyways");
//     }
// }

// kitchen()

// ________


// function getShowSomething(){
//     console.log("hello i am response from the API");
// }

// try{
//     getShowSomething();

// } catch (error){
//     console.log("i have an error");

// } finally{
//     console.log("run code after anyways");
// }

// async function getUsers(){
//     const data = await fetch("https://reqres.in/api/users")
//     const jsonData = await data.json()
//     console.log(jsonData);

//     try{
//         const data = await fetch("https://reqres.in/api/users")
//         const jsonData = await data.json()
//         console.log(jsonData);
//         return jsonData

//     }catch(error){
//         console.log(error);
//         return error

//     }finally{
//         console.log("api call is done ");

//     }
// }

//  getUsers()
//_____________________________

 // how make multiply API calls

 // https://jsonplaceholder.typicode.com/todos/1
 // https://jsonplaceholder.typicode.com/todos/2
 // https://jsonplaceholder.typicode.com/todos/3

 async function doFetch(url){
    try{
        const data = await fetch(url);
        const jsonData = await data.json();
        return jsonData

    }
    catch(error){
        console.log(error);

    }
}
  
    async function main (){
        const data = await Promise.all(([
            doFetch("https://jsonplaceholder.typicode.com/todos/3"),
            doFetch("https://jsonplaceholder.typicode.com/todos/2"),
            doFetch("https://jsonplaceholder.typicode.com/todos/1")

        ]))
        console.log(data);
    }
 main();
