const allBtn= document.getElementsByClassName('btn-ghost');
let seats=40;
let count=0;
for (const btn of allBtn){
    btn.addEventListener('click',function(e){
        seats=seats-1;
        count=count+1;


        const seatName=e.target.parentNode.childNodes[3].innerText;
        const ticketReceipt=document.getElementById('ticket-receipt');
        const li=document.createElement('li');
        const p1=document.createElement('p');
        p1.innerText=seatName;
        const p=document.createElement('p');
        p.innerText= 'Economy';
        const p2=document.createElement('p');
        p2.innerText=550;
        li.appendChild(p1);
        li.appendChild(p);
        li.appendChild(p2);
        ticketReceipt.appendChild(li);
        setInnerText("total-seats", seats);
        setInnerText("booked-tickets", count);
    })
}
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}