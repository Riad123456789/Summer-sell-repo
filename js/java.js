let total= 0;

function handleClick(target){
    const itemsContainer =document.getElementById('items')
    const itemName =target.childNodes[3].childNodes[3].innerText;
    const li =document.createElement('li');
    li.innerText = itemName;
    itemsContainer.appendChild(li);

    const price =target.childNodes[3].childNodes[5].childNodes[0].innerText;

   total = parseFloat(total)+ parseFloat(price);
   const totalPrice= total.toFixed(2);
   document.getElementById('total').innerText =totalPrice;

   
}


document.getElementById('home').addEventListener('click',function(){
    window.location.href ="index.html";
})