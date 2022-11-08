function randomId() {
    return Math.floor(Math.random() * 100);
}

const listPhone = [
    {
        id: randomId(),
        name: "iPhone 14 Pro Max",
        priceOld: 35000000,
        priceNew: 32000000,
        image: "images/img1.png",
        color: [
            {name: "Deep Purple", value: "#736879"},
            {name: "Silver", value: "#F3E5C8"},
            {name: "Dark", value: "#EFF1F0"},
            {name: "Gold", value: "#3B3A38"}
        ],
        memory: [
            {name: "128GB", value: "128GB"},
            {name: "256GB", value: "256GB"},
            {name: "512GB", value: "512GB"},
            {name: "1TB", value: "1TB"}
        ]
    },
    // {
    //     id: randomId(),
    //     name: "iPhone 14 Plus",
    //     priceOld: 28000000,
    //     priceNew: 25000000,
    //     image: "images/img2.png",
    //     color: [
    //         {name: "Deep Purple", value: "#736879"},
    //         {name: "Silver", value: "#F3E5C8"},
    //         {name: "Dark", value: "#EFF1F0"}
    //     ]
    // }
];

const listProductInCart = []

const showPhone = document.querySelector('.product-list').innerHTML = listPhone.map(item => {


    let radioColor = item.color.map(itemColor => {
        return `<div class="itemColor">
<input type="radio" name="color"  value="${itemColor.name}" id="color">
<label for="">${itemColor.name}</label>

</div>`
    }).join('')

    let radioMemory = item.memory.map(itemMemory => {
        return `<div class="itemMemory itemColor">
<input type="radio" name="memory"  value="${itemMemory.name}" id="color">
<label for="">${itemMemory.name}</label>

</div>`
    }).join('')

    return ` <div class="product-item" data="${item.id}">
                <img class="product-item_img" src="${item.image}" alt="">
                <p class="product-item_name">${item.name}</p>
                <div class="product-item_groupColor">
                ${radioColor}
                </div>
                <div class="product-item_groupColor">
                ${radioMemory}
                </div>
                <p class="product-item_price">
                    <span class="product-item_price-new">
                        ${item.priceNew.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    })}
                    </span>
                    <span class="product-item_price-old">
                        ${item.priceOld.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    })}
                    </span>
                </p>
                <button class="btn btn-buy">Add to cart</button>
            </div>`
}).join('')

let buttonAdd = document.querySelectorAll('.product-list .product-item')
buttonAdd.forEach((itemAdd) => {
    itemAdd.addEventListener("click", function (event, data) {
        if (event.target.classList.contains("btn-buy")) {

            let phoneId = document.querySelector('.product-item').getAttribute("data")
            let phoneImage = document.querySelector('.product-item_img').getAttribute("src")

            let phoneColor = document.querySelectorAll('input[name="color"]');
            let selectedColor;
            for (const radioColor of phoneColor) {
                if (radioColor.checked) {
                    selectedColor = radioColor.value;
                    break;
                }
            }

            let phoneMemory = document.querySelectorAll('input[name="memory"]');
            let selectedMemory;
            for (const radioMemory of phoneMemory) {
                if (radioMemory.checked) {
                    selectedMemory = radioMemory.value;
                    break;
                }
            }

            let phoneCartName = document.querySelector('.product-item_name').textContent
            let phoneCartPrice = document.querySelector('.product-item_price-new').textContent
            let phoneQuantity = 1;

            let phoneNew = [phoneId, phoneImage, phoneCartName, selectedColor, selectedMemory, phoneCartPrice.trim(), phoneQuantity]

            if (selectedColor === undefined || selectedMemory === undefined) {
                alert('Vui lòng chọn Màu sắc hoặc dung lượng')
            } else {
                let checkIsset = false;
                listProductInCart.forEach(itemPhone => {
                    if(phoneNew[phoneId] === itemPhone[phoneId]){
                        checkIsset = true;
                        alert('Sản phẩm đã có trong giỏ hàng')
                        return listProductInCart
                    }
                })

                if (checkIsset == false) {
                    listProductInCart.push(phoneNew)
                    console.log(listProductInCart)
                }

            }

            console.log('san pham trong gio la ' + listProductInCart)


        }
    });
});

