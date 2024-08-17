let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];
    displayItemOnHomePage();
    displayBagIcon();
}

function AddToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector(".bag_item_count");
    if(bagItemCountElement > 0) {
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = 'visible';
    }
     else{
         bagItemCountElement.style.visibility = 'hidden';
     }
}



function displayItemOnHomePage(){
    let itemsContainerElement = document.querySelector(".items-container");
    if(!itemsContainerElement) {
        return;
    }

    let items = [
        {
            id:'001',
            item_image:'j1.jpg',
            rating:{
                starts:4.5,
                noOfReviews:1400,
            },
            company_name:'Carlton London',
            item_name:'Rhodium-plated cz Floral Studs',
            current_price:606,
            original_price:1045,
            discount:42,
        },
    
        {
            id:'002',
            item_image:'j2.jpg',
            rating:{
                starts:4.3,
                noOfReviews:24,
            },
            company_name:'Cukoo',
            item_name:'Women Padded Halter Neck Swimming',
            current_price:1507,
            original_price:2599,
            discount:42,
        },
    
        {
            id:'003',   
            item_image:'j3.jpg',
            rating:{
                starts:4.1,
                noOfReviews:1249,
            },
            company_name:'Nuevosdamas',
            item_name:'Women Red & White Printed A-Line',
            current_price:495,
            original_price:1599,
            discount:59,
    
        },
    
        {
            id:'004',
            item_image:'j4.jpg',
            rating:{
                starts:5,
                noOfReviews:10,
            },
            company_name:'Adidas',
            item_name:'Indian Cricket ODI Jersey',
            current_price:999,
            original_price:999,
            discount:0,
    
        },
    
        {
            id:'005',
            item_image:'j5.jpg',
            rating:{
                starts:4.2,
                noOfReviews:3500,
            },
            company_name:'Roadster',
            item_name:'Pure Cotton T-Shirt',
            current_price:420,
            original_price:850,
            discount:45,
    
        },
    
        {
            id:'006',
            item_image:'j6.jpg',
            rating:{
                starts:0,
                noOfReviews:10,
            },
            company_name:'Nike',
            item_name:'Men Reactx Running Shoes',
            current_price:14995,
            original_price:14995,
            discount:0,
    
        },
    
        {
            id:'007',
            item_image:'j7.jpg',
            rating:{
                starts:4.2,
                noOfReviews:1388,
            },
            company_name:'The Indian Garage Co',
            item_name:'Men Silim Fit Regular Shotrs',
            current_price:639,
            original_price:1599,
            discount:60,
    
        },
    
        {
            id:'008',
            item_image:'j8.jpg',
            rating:{
                starts:4.2,
                noOfReviews:5200,
            },
            company_name:'Nivea',
            item_name:'Men Fresh Deodrant 150ml',
            current_price:142,
            original_price:205,
            discount:50
        }
    ]
    
    let itemsHtml = '';
    items.forEach((item)=>{
        itemsHtml +=  `
        <div class="item-conatainer">
        <img src="${item.item_image}" alt="item-image" class="item-image"/>
        <div class="rating"> ${item.rating.starts}⭐| ${item.rating.noOfReviews} </div>
        <div class="company-name">${item.company_name}</div>
        <div class="items-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs${item.current_price} </span>
            <span class="original-price">Rs${item.original_price} </span>
            <span class="discount">(${item.discount} % OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="AddToBag(${item.id})">Add to Bag</button>
    
    </div>`
    
    });
    itemsContainerElement.innerHTML = itemsHtml;
}


