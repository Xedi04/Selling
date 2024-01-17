let divAll = document.querySelector(".p-divs");
let sortBtn = document.querySelector("#sort");
let sorted = "as";
let filterArr = [];
let Search=document.querySelector("#search");
let coppyArr=[]

function showData() {
    fetch("http://localhost:3000/Selling")
        .then(res => res.json())
        .then(data => {
            coppyArr=data
            divAll.innerHTML = ""
            filterArr = filterArr.length ||Search.value ? filterArr : data;
            filterArr.forEach(element => {
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
                                <button id="uc" onclick="Details(${element.id})">Details</button>
                                <button id="dord"  onclick="Fav(${element.id})">Fav</button>
                            </div>
                        </div>
                    </div>
            `
            });
        })
}

showData()

Search.addEventListener("input", (e)=>{
filterArr=coppyArr;
filterArr=filterArr.filter((el)=>
el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
)
showData()
})

sortBtn.addEventListener("click", () => {
    if (sorted === "as") {
        sorted = "des"
        filterArr.sort((a, b) => a.name.localeCompare(b.name))
        sortBtn.innerHTML = "Sort Asc"
    } else if (sorted === "des") {
        sorted = "def"
        filterArr.sort((a, b) => b.name.localeCompare(a.name))
        sortBtn.innerHTML = "Sort Dsc"
    } else {
        sorted = "as"
        sortBtn.innerHTML = "Sort"
    }
    showData();
})


function Fav(id) {
    axios.get("http://localhost:3000/Selling/" + id)
        .then(res => {
            axios.post("http://localhost:3000/Fav", res.data)
                .then(res => window.location = "./fav.html")
        })
}

function Details(id) {
    window.location = `./details.html?id=${id}`
}

let Menu = document.querySelector(".menu");
let List = document.querySelector("#list");

List.addEventListener("click", () => {
    if (Menu.style.display === "none") {
        Menu.style.display = "flex"
    } else {
        Menu.style.display = "none"
    }
})

let navbar = document.querySelector(".n-1");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>100){
        navbar.style.display="none"
    }else{
        navbar.style.display=""
    }
})

let Top = document.querySelector("#top");
let firstSec = document.querySelector(".banner");

Top.addEventListener("click", ()=>{
    firstSec.scrollIntoView({
        behavior:"smooth"
    })
})

