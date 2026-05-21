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
                    <a href="./products/pr2.html"><button onclick="addToarray(${JSON.stringify(i).replace(/"/g,"&qout;")})" class="btn-detail">توضیحات</button></a>
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

console.log(services[0]);
let viewedProducts =[];

function addToarray(product){
    viewedProducts.push(product);
    console.log(product);
    
}

