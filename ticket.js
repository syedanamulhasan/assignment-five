const allBtn= document.getElementsByClassName('btn-ghost');

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function onClick() {
//   btn.style.backgroundColor = 'salmon';
//   btn.style.color = 'white';
// });
// document.getElementsByClassName('btn-ghost').onmouseover = function() {
//     this.style.color = 'red';
//   };
// const btnIndex= allBtn[index];

// for(let index=0; index<allBtn.length;index++){
//     const button= allBtn[index];
//     // console.log(element);
//     button.addEventListener('click',function(){
//         console.log('clicked');
//     })
// }

let seats=40;
let count=0;
for (const btn of allBtn){
    btn.addEventListener('click',function(e){
        seats=seats-1;
        count=count+1;
        // const btn=e.target;
        // console.log(btn);
        const seatName=e.target.parentNode.childNodes[3].innerText;
        const ticketReceipt=document.getElementById('ticket-receipt');
        const li=document.createElement('li');
        const p1=document.createElement('p');
        p1.innerText=seatName;
        const p=document.createElement('p');
        p.innerText= 'Economy';
        const p2=document.createElement('p');

        e.target.style.backgroundColor='lime';
        e.target.setAttribute("disabled", false);;
        p2.innerText=550;
        li.appendChild(p1);
        li.appendChild(p);
        li.appendChild(p2);
        ticketReceipt.appendChild(li);

        const totalPrice= document.getElementById('total-price').innerText
        const convertedTotalPrice= parseInt(totalPrice);
        const sum = convertedTotalPrice + parseInt (p2.innerText);

        const grandTotal= document.getElementById('grand-total').innerText
        const convertedGrandTotal=parseInt(grandTotal);
        const sum2 = convertedGrandTotal + parseInt (p2.innerText);
        if(sum2>2200){
            alert("you can't select more than 4 tickets")
            return;
        }
        // totalPrice('total-price',parseInt(p2.innerText))
        // grandTotalCost('grand-total'parseInt(p2.innerText))
        setInnerText('grand-total', sum2);
        setInnerText('total-price', sum);
        setInnerText("total-seats", seats);
        setInnerText("booked-tickets", count);
    })
}

// function totalPrice(id,p2.innerText){
//     const totalPrice= document.getElementById('total-price').innerText;
//     const convertedTotalPrice= parseInt(totalPrice);
//     const sum = convertedTotalPrice + parseInt (p2.innerText);
//     setInnerText(id, sum);
// }

//alert section
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

// function grandTotalCost(){
//     const totalPrice= document.getElementById('total-price').innerText
//     const convertedTotalPrice= parseInt(totalPrice);
//     setInnerText("grand-total",convertedTotalPrice);
// }