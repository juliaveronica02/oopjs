// fetch(`${URL}`)
// .then(response => { 
//         return response.json() 
//     })
//     .then(data => { 
//         console.log(data);
//     })
//     .catch(err => { 
//         console.log(err);
//     })
const URL = 'http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination/'
const imgUrl = 'http://35.240.201.155:3000'

//table
axios.get(URL)
    .then(res => {
        const listData = document.getElementById("table");
        data = res.data;
        console.log(data);

        res.data.forEach(item => {
            const {
                images,
                destinationName,
                city,
                province,
                longitude,
                latitude
            } = item;
            const stringHTML = `
<tr>
<td>
<div class="text-center">
<img height="80px" src='${imgUrl}/${images}' alt='...' />
</div>
</td>
<td>${destinationName}</td>
<td>${city}</td>
<td>${province}</td>
<td>${longitude}</td>
<td>${latitude}</td>
<tr>
`;
            listData.innerHTML += stringHTML;
        })
    })
    .catch(err => console.log(err))

//card
axios.get(URL)
    .then(res => {
        const listData = document.getElementById("card");
        data = res.data;
        console.log(data);

        res.data.forEach(item => {
            const {
                images,
                destinationName,
                city,
                province,
                longitude,
                latitude
            } = item;
            const itemHTML = `
        <div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <img class="circularsquare" width = "20%" height="80px" src='${imgUrl}/${images}' alt='...' />
                <div class="ccenter">
                Destination Name: ${destinationName}<br/>
City: ${city}<br/>
Province: ${province}</td>
Longtitude: ${longitude}</td>
Latitude: ${latitude}</td>
                </div>
            </div>
   </div>
   </div>`;
   listData.innerHTML += itemHTML;
})
})