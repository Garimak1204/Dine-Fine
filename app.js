const contain=document.querySelector(".contain");
const main=document.querySelector("#main");
const exploreb = document.querySelector(".exploreb");
let inputArr = [];
exploreb.addEventListener('click',()=>{
    sendReq(inputArr);
})
const Mcbutton = document.querySelector(".Mcbutton");
Mcbutton.addEventListener('click',()=>{
    inputArr.push('main course');
    sendReq(inputArr);
})
const bbutton = document.querySelector(".bbutton");
bbutton.addEventListener('click',()=>{
    inputArr.push('bread');
    sendReq(inputArr);
})
const mbutton = document.querySelector(".mbutton");
mbutton.addEventListener('click',()=>{
    inputArr.push('marinade');
    sendReq(inputArr);
})
const sbutton = document.querySelector(".sbutton");
sbutton.addEventListener('click',()=>{
    inputArr.push('side dish');
    sendReq(inputArr);
})
const bfbutton = document.querySelector(".bfbutton");
bfbutton.addEventListener('click',()=>{
    inputArr.push('breakfast');
    sendReq(inputArr);
})
const fbutton = document.querySelector(".fbutton");
fbutton.addEventListener('click',()=>{
    inputArr.push('fingerfood');
    sendReq(inputArr);
})
const soupbutton = document.querySelector(".soupbutton");
soupbutton.addEventListener('click',()=>{
    inputArr.push('soup');
    sendReq(inputArr);
})
const dbutton = document.querySelector(".dbutton");
dbutton.addEventListener('click',()=>{
    inputArr.push('dessert');
    sendReq(inputArr);
})
const saladbutton = document.querySelector(".saladbutton");
saladbutton.addEventListener('click',()=>{
    inputArr.push('salad');
    sendReq(inputArr);
})
const drinkbutton = document.querySelector(".drinkbutton");
drinkbutton.addEventListener('click',()=>{
    inputArr.push('drink');
    sendReq(inputArr);
})
const snackbutton = document.querySelector(".snackbutton");
snackbutton.addEventListener('click',()=>{
    inputArr.push('snack');
    sendReq(inputArr);
})
const bevbutton = document.querySelector(".bevbutton");
bevbutton.addEventListener('click',()=>{
    inputArr.push("beverage");
    sendReq(inputArr);
})
let endBtn = document.querySelector('.endButton');
const sendReq = async (tag)=>{
    try{
        let res;
        if(tag.length==0)
        res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=cf5695efb9c54f5e8e63bd7e64cb5759&number=10`);
        else
        {
        res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=cf5695efb9c54f5e8e63bd7e64cb5759&number=1&tags=${tag}`);
        }
        console.log(res);
        let arr = res.data.recipes;
        doIt(arr);
        let a = document.createElement('a');
        a.href="#firstPage";
        seeBtn.style.display = 'inline-block';
        backBtn.style.display = 'inline-block';
        a.append(backBtn);
        endBtn.append(a);
    }
    catch(e){
        console.log('Oops',e);
    }
}
let seeBtn = document.querySelector('.seeBtn');
seeBtn.addEventListener('click',()=>{
    sendReq(inputArr);
});
let backBtn = document.querySelector('.backBtn');
let fp = document.querySelector('#firstPage')
backBtn.addEventListener('click',()=>{
    contain.innerHTML="";
    seeBtn.style.display = 'none';
    backBtn.style.display = 'none';
    inputArr = [];
})
function doIt(data){
  data.forEach((e)=>{
    let div = document.createElement('div');
    div.style.margin = '15px';
    div.style.display = "inline-block";
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${e.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${e.title}</h5>
      <a href="${e.spoonacularSourceUrl}" class="btn btn-primary">Go To Recipe</a>
    </div>
  </div>`;
   contain.append(div);
  });
}
let search = document.querySelector("#search");
search.addEventListener('input',()=>{
     searchReq(search.value);
})
const searchReq = async (x)=>{
    let id = 'd953db18';
    let key = '679bc55e864a3a4273c1d415d888fd91';
    try{
        const res = await axios.get(`https://api.edamam.com/search?q=${x}&app_id=${id}&app_key=${key}&to=20`);
        console.log(res.data.hits);
        result(res.data.hits);
    }
    catch(e){
        console.log('Oops',e);
    }
}
function result(data){
  data.forEach((e)=>{
    let div = document.createElement('div');
    div.style.margin = '15px';
    div.style.disply = "inline-block";
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${e.recipe.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${e.recipe.label}</h5>
      <a href="${e.recipe.url}" class="btn btn-primary">Go To Recipe</a>
    </div>
  </div>`;
   contain.append(div);
  });
  let a = document.createElement('a');
  a.href="#firstPage";
  backBtn.style.display = 'inline-block';
  a.append(backBtn);
  endBtn.append(a);

}

