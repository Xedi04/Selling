let id = new URLSearchParams(window.location.search).get("id");
let divAll = document.querySelector(".p-divs");

fetch("http://localhost:3000/Selling/"+id)
    .then(res => res.json())
    .then(data => {
            divAll.innerHTML += `
        <div class="div6">
        <div class="p-img">
            <img src="${data.image}" alt="">
        </div>
        <div class="p-text">
            <h3>${data.name}</h3>
            <div class="p">
                <p><i class="bi bi-star-fill"></i> 5.0</p>
                <p><i class="bi bi-heart-fill"></i></p>
            </div>
            <p>${data.des}</p>
            <div class="btn">
                <button id="uc">Details</button>
                <button id="dord">Fav</button>
            </div>
        </div>
    </div>
`
    })