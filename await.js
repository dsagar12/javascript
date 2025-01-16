// const getPromises=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Updating data.........");
//         setTimeout(()=>{
//             let s=reject();
//             console.log("data 1");
//             console.log(s);
//         },6000);
//     });
// };

// let promise=getPromises();

// promise.then(()=>{
//     console.log(promise);
// })
// promise.catch(()=>{
//     console.log(promise);
// });


// const fetchData = async () => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       console.log(response.data[2].body );
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   fetchData();

let res=async ()=>{
  try{
    try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response.data[2].body );
          } catch (error) {
            console.error('Error fetching data:', error);
          }

  }
};
res();


  