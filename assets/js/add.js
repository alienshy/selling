
let url = "http://localhost:3000/data/"


let formadd = document.querySelector("form")      /////form///
let fileadd = document.querySelector("#file")     /////img filesi////
let imgadd = document.querySelector("#img234")    //////img filesini soxacagimiz div////
let textadd = document.querySelector("#text")    /////info ucun text
let nameadd = document.querySelector("#name")



/////img/////
fileadd.addEventListener("change", () => {
    let src = fileadd.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(src)
    reader.onload = function (e) {
        imgadd.src = e.target.result
    }
})


formadd.addEventListener('submit', (e) => {
    e.preventDefault();
    let object = {}
    let src = fileadd.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(src);
    reader.onload = (e) => {
        object = {
            img: e.target.result,
            name: nameadd.value,
            infom: textadd.value
        }
        axios.post(url, object).then(res => {
            console.log(res.data);
        });

    }
    console.log(object);
    // window.location = "./index.htm"
});




//////////table/////
let body = document.querySelector("table tbody")
async function add() {
    let res = await axios.get(url)
    let data = res.data;
    data.forEach(el => {
        body.innerHTML += `
        <tr>
        <td>${el.id}</td>
        <td>${el.name}</td>
        <td>${el.infom}</td>
        <td><i class = "bi bi-trash" onclick="deletecard(${el.id})">Delete</i></td>
        </tr>
        `
    });
}
add()


/////delete////

async function deletecard(id){
    let res = await axios.delete(url+id)
    window.location.reload();
    return res.data;


}