let total= 0;


const submit =document.getElementById('submit')
submit.disabled = true

const secondSubmit =document.getElementById('secondSubmit')
secondSubmit.disabled=true

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
   document.getElementById('priceTotal').innerText=totalPrice;

if(totalPrice >= 0){
    secondSubmit.disabled=false
}

if(totalPrice >= 200 ){
    submit.disabled = false
}

}


function apply(target){
    const value =target.parentNode.childNodes[1].value;
const code =document.getElementById('code').innerText


    if(value ===code){
        const p = total *20 /100
        const fixed =p.toFixed(2)
        const discountTotal= document.getElementById("discount").innerText=fixed
      
        const allTotal = total-discountTotal
        const fixedAllTotal =allTotal.toFixed(2);
      
        document.getElementById('priceTotal').innerText=fixedAllTotal;

    }else{
        alert('invalid')
    }

}
    

document.getElementById('home').addEventListener('click',function(){
    window.location.href ="index.html";
})