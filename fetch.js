//mendeskripsikan data melalui link
const URL = 'https://api.github.com/users/juliaveronica02/followers'
//fetch adalah bawaan javascript
//bisa pakai fetch(URL) ataupun fetch(`${URL}`).
// fetch(`${URL}`).then(response => { //singkatan: res = response, event = e, err = error.
//         return response.json() //untuk menjalankan response dari link jika sudah maka akan ke .then data
//     })
//     .then(data => { //memunculkan data
//         console.log(data);
//     })
//     .catch(err => { //jika response tidak sesuai maka dia akan error
//         console.log(err);
//     })


//using Axios to get data, pakai axios sering muncul permasalahan terutama di cross (network).
const githubURL =
axios.get(URL)
.then(response =>{
     console.log(response);
})
.then(data =>{
    console.log('data from axios',data);
})
.catch(error =>{
    console.log(error);
})