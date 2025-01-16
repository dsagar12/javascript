const URL="https://jsonplaceholder.typicode.com/posts";



// const getFacts=async ()=>{
//     console.log("gettting data");
//     let responce=await fetch(URL);
//     console.log(responce);
//     let res=await responce.json();
//     console.log(res[3].text);

// }

function getFacts(){
    fetch(URL).then((response)=>{
        return response.json;
    }).then((data)=>{
        console.log(data[2].text);

    })
}
getFacts();





