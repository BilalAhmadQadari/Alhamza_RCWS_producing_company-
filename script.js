//calling function on the mobile size
function toggleMenu(){
    document.querySelector("#mobileMenu").classList.toggle("active");
}



//an api for frequenctly asked questions section
let faqContainer = document.querySelector(".faq");
let faqs = [];

async function getData() {
    try{
        const response = await fetch("./question.json");
        const data  = await response.json();
        faqs = data;

        data.forEach((faq,index) =>{
        faqContainer.innerHTML +=`
        <div class="questions" onclick="showAnswer(${index})">
            <h3>${faq.question}</h3>
            <p id="answer-${index}"></p>
        </div>
    `;
});
    }catch (error)
    {
        // console.log("Error: ",error);
    }   
}
getData();

function showAnswer(index){
    let answer= document.getElementById(`answer-${index}`);

    if(answer.classList.contains("show")){
        answer.classList.remove("show");
        answer.innerText="";
        
    }else{
        answer.classList.add("show");
        answer.innerText=faqs[index].answer;
        

    }
}




//an API for showing products
let productGrid = document.querySelector(".products-grid")
let services = [];

async function getProducts() {
    try{
        const response = await fetch("./products.json");
        const data  = await response.json();
        
        services = data;

        data.forEach((i) =>{
        productGrid.innerHTML +=`
        <div class="product-card"> 
            <div class="product-image">
                <img src="${i.image}" alt="Product Name">
            </div>
            <div class="product-info">
                <h3>${i.name}</h3>
                <p>${i.infoI}</p>
                <div class="product-actions">
                    <a href="./products/pr2.html"><button class="btn-detail">توضیحات</button></a>
                </div>
            </div>
        </div>
            
    `;
});
    }catch (error)
    {
       // console.log("Error: ",error);
    }   
}

getProducts();




// get famous product

// let prod = document.querySelector(".famous-service-card");

// if(!prod){console.log("not found the prod!");}
// async function getFamousProducts() {
//     try{
//         const response = await fetch("./products.json");
//         const data  = await response.json();

//         data.forEafch((service, index)=>{
//         prod.innerHTML +=`
//         <article class="products-card">
//           <div class="img-box">
//             <img src= ${service[index].image}>
//           </div>
//           <div class="card-info">
//             <h3>${service[index].productName}</h3>
//             <p>${servicee[index].decription}</p>
//             <div class="card-footer">
//               <span class="liked">خوښ شوی</span>
//               <span class="rating">${service[index].ratings}</span>
//             </div>
//           </div>
//         </article>

    
//         `;
//         })

//     }catch(error){
//         console.log("Error: ",error);
//     }
// }
// getFamousProducts();


// let srvCard = document.querySelector(".famous-service-card");

// productes.forEach(prd => {
//     srvCard.innerHTML +=`
//     <div class="card">
//         <img src="${prd.image}">
//         <h2>${prd.name}<h2>
//         <p>${prd.price}</p>
//         <button onclick="viewDetail(${prd.id})">توضیحات</button>

//     </div>
//     `;
// });



























// testomonial section
let comments = [
    {
        image:"./asset/haqmal.jpg",
        name: "محمد نبي حقمل",
        position:"د مسلکي او تخنیکي ټیم مسؤل",
        coment:"“زه د الحمزة امارتي شرکت هلي ځلي د نظامي تولید په برخه کې ستایم او ور څخه مننه کوم چې په کمو امکاناتو يې ډېر پرمختللی وسایل تولید کړي او لا یې هم ګړندی هلي ځلي رواني ساتلي دي د لا پر مختک په هیله یې یو.”"

    },
     {
        image:"./asset/tasal.jpg",
        name: "تسل کندهاری",
        position:"د شرکت د تولیداتو ډیزاینر",
        coment:"“الحمزة امارتي شرکت یو له عصري تولیدي شرکتونو له جملي څخه دی، جې نه یواځي دا چې په خپله برخه کې ساری نه لري بلکي د افغاني استعدادونو د جلب یوازینی منبع ده چې په زیاته اندازه افغاني کدرونه یې په کار ګمارلي دي.”"


    },
     {
        image:"./asset/wakil.jpg",
        name: "حبیب الرحمن وکیل",
        position:"نظامي څانکې امر",
        coment:"“ زه د یو هیوادوال په حیث په خپل اسلامي نظام باندي باور لرم چې دوی به د ولس او نظام د ساتني او لپاره هره ممکنه هڅه وکړي او د ولس په ملګرتیا به مو قافله د بریالیتوب تر سرحده رسوي رسوي. بیا هم له الحمزةامارتي شرکت څخه مننه کوم چې هیوادوالو ته د خپلو خدماتو څخه خبرداری ورکوي”"


    },
     {
        image:"./asset/mohammad.jpg",
        name: "حافظ محمد",
        position:"د تولیداتو د کیفیت ارزوني څانګې امر",
        coment:"د یاد شرکت تولیدات زموږ د ارزونو او د تضمین کیفیت کميټې د راپورونو له مخی خورا ډېر عالي کیفیت لري او د نړۍ د تولیداتو سره د سیالۍ ډګر ته راوځې."
   }
];

let commentContainer = document.querySelector(".testimonials-container");
comments.forEach((comment, index) =>{

    commentContainer.innerHTML+= `
    
    <div class="card">
      <img src= ${comment.image}>
      <p>${comment.coment}      </p>
      <h3>${comment.name}</h3>
      <span>${comment.position}</span>
    </div>
    
    `

})

let products=[
    {
        image:"./asset/RCWS9jpg",
        prName:"Huge RWCS ",
        description:"this is a better one weapon"
        
        
    }
]

let productCard = document.querySelector(".product-card");
products.forEach((product,index)=>{
    productCard.innerHTML+=`
    
        <div class="product-image">
        <img src= ${product.image} >
      </div>
      <div class="product-info">
        <h3>${product.prName} </h3>
        <p>${product.description}  </p>
        <div class="product-actions">
          <a href="#"><button class="btn-detail">توضیحات</button></a>
        </div>
      </div>
        `
})
