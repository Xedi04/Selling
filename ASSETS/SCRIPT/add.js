let id = new URLSearchParams(window.location.search).get("id");
let Form = document.querySelector("#form");
let Name = document.querySelector("#name");
let fileImg = document.querySelector("#file");
let imgDiv = document.querySelector("#imgdiv");
let Des = document.querySelector("#des");
let Submit = document.querySelector("#submit");
let xetaDiv = document.querySelector(".xeta");
let Table = document.querySelector("table");

axios.get("http://localhost:3000/Selling/"+id)
    .then(res => {
        let data = res.data;
        Name.value = data.name,
            Des.value = data.des,
            imgDiv.src=data.image
    })

    fileImg.addEventListener("input", (e)=>{
        let file=e.target.files[0]
        if(file){
            let reader =new FileReader;
            reader.readAsDataURL(file);
            reader.onload=function(){
                imgDiv.src=reader.result
            }
        }
    })

    Form.addEventListener("submit", (e)=>{
        e.preventDefault();

        let namevalue=Name.value.trim();
        let desvalue=Des.value.trim();

        if(namevalue===""||desvalue===""){
            xetaDiv.innerHTML="Zehmet olmasa bosluqlari doldurun"

        }else{
        if(!id){
            axios.post(`http://localhost:3000/Selling`, {
                name:Name.value,
                des:Des.value,
                image:imgDiv.src
            }).then(res=>window.location="./index.html")
        }else{
            axios.patch(`http://localhost:3000/Selling/${id}`, {
                name:Name.value,
                des:Des.value,
                image:imgDiv.src
            }).then(res=>window.location="./index.html")
        }
    }
    })

    fetch("http://localhost:3000/Selling")
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
            Table.innerHTML+=`
            <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.des}</td>
            <td>
                <button  onclick="Delete(${element.id})">Delete</button>
                <button onclick="Update(${element.id})">Update</button>
            </td>
        </tr>
            `
        });
    })

    function Delete(id){
        axios.delete("http://localhost:3000/Selling/"+id)
        .then(res=>window.location="./add.html")
    }

    function Update(id){
        window.location=`./update.html?id=${id}`
    }
