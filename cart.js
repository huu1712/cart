let localPhones = localStorage.getItem("phoneNew").split(",")

let listLocalPhone = []

listLocalPhone.push(localPhones)

console.log(localPhones)

const showPhoneCart = document.querySelector('.localCart').innerHTML = listLocalPhone.map(localItem => {

    return `<img src="${localItem[1]}" alt=""/>
            <div>${localItem[3]}</div>
            <div>${localItem[4]}</div>
<input type="number" name="" id="" min="1" value="${localItem[6]}">
            `

}).join("")

