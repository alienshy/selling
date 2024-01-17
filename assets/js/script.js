window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        document.querySelector(".header").style.top = "-200px"
    }
    else{
        
    }
})















let url = "http://localhost:3000/data/"


let card = document.querySelector(".cardscon")
let search = document.querySelector("#search")
let sort = document.querySelector("#sort")
let filter = []
let copy = []

async function funnam(){
    let res = await axios.get(url)
    let data = await res.data
    copy = data 
    card.innerHTML="";
    filter = filter.length || search.value ? filter:data;

filter.forEach(e => {
    card.innerHTML+=`
    <div class="card">
    <div class="imgdiv">
        <img src="${e.img}" alt="">
    </div>
    <p class="two">${e.name}</p>
    <div class="ard">
        <div class="star"><i class="bi bi-star-fill"></i>
                <p>5.0</p>
            </div>
        <div class="heart"><i class="bi bi-heart-fill"></i>
                <p>29</p>
            </div>
    </div>
    <p class="lorem">${e.infom}</p>
    <div class="viewbutton"><button class="button3"><a href="#">CART</a></button><button class="button4"><a href="#">VIEW</a></button></div>
</div>
    `
});
}
funnam()


search.addEventListener("input",(el)=>{
    filter = copy;
    filter = filter.filter((y)=>{
        return y.name.toLocaleLowerCase().includes(el.target.value.toLocaleLowerCase())
    })
    funnam()
})


///////sort////
sort.addEventListener("change",(el)=>{
    if(el.target.value == "az"){
        filter.sort((a,b)=>a.name.localeCompare(b.name))
    }
    else if(el.target.value == "za"){
        filter.sort((a,b)=>b.name.localeCompare(a.name))
    }
else{
    filter = copy;
}
funnam()
})


/////delete////