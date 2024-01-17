let id = new URLSearchParams(window.location.search).get("id");
let divAll = document.querySelector(".p-divs");

fetch("http://localhost:3000/Fav")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            divAll.innerHTML += `
        <div class="div6">
        <div class="p-img">
            <img src="${element.image}" alt="">
        </div>
        <div class="p-text">
            <h3>${element.name}</h3>
            <div class="p">
                <p><i class="bi bi-star-fill"></i> 5.0</p>
                <p><i class="bi bi-heart-fill"></i></p>
            </div>
            <p>${element.des}</p>
            <div class="btn">
                <button id="uc">Details</button>
                <button id="dord">Fav</button>
                <button onclick="Delete(${element.id})">Delete</button>
            </div>
        </div>
    </div>
`

        });
    })
function Delete(id){
    axios.delete("http://localhost:3000/Fav/"+id)
    .then(res=>window.location="./fav.html")
}
