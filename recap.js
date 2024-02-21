let chair = 12;
let count= 0;
const allBtn = document.getElementsByClassName("btn-ghost");
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const seatName= event.target.parentNode.childNodes[0].innerText;
        
        console.log(seatName);
        
        const maxFour= getConvertedValue("booked-tickets")
        if(maxFour + 1 > 4){
            alert("you can not book more than 4 tickets");
            return   
        }
        event.target.setAttribute("disabled",false);
        event.target.style.backgroundColor="#1DD100";
        chair = chair-1;
        count = count+1;
        // const colTwoButtons=event.target.parentNode.childNodes[5].innerText;

        const ticketReceipt = document.getElementById('ticket-receipt');

        

        setInnerText("total-seats",chair);
        setInnerText( "booked-tickets",count)

        const newDiv = document.createElement("div");
        newDiv.classList.add("flex", "justify-between")
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText= seatName;
        p2.innerText= 'Economy';
        p3.innerText= 550;
        const ticketPrice= p3.innerText;

        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(p3);
        ticketReceipt.appendChild(newDiv);
        
        updateTotalCost(ticketPrice)
        updateGrandTotal();
    })
}

// coupon code part

function updateGrandTotal(status){
    const totalPrice = getConvertedValue("total-price");
    if(status == undefined){
        document.getElementById("grand-total").innerText = totalPrice;
    }
    else{
        const couponCode = document.getElementById("coupon-code").value;
       if(couponCode === "NEW15"){
        document.getElementById("grand-total").innerText = totalPrice * 0.85;
        document.getElementById("coupon").style.display= 'none';
       }
       else if(couponCode === "Couple 20"){
        document.getElementById("grand-total").innerText = totalPrice * 0.80;
        document.getElementById("coupon").style.display= 'none';
       }
       else{
        alert("Please enter valid coupon code")
       }
    
    }
    
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}
function updateTotalCost(value){
    const totalPrice = getConvertedValue("total-price");
    const sum = totalPrice + parseInt(value);
    document.getElementById("total-price").innerText = sum;
}


function getConvertedValue(id) {
    const seats = document.getElementById(id).innerText
    const convertedSeats = parseInt(seats);
    return convertedSeats
}


function checkParameter(status){
    console.log(status);
}
checkParameter("test") 
// const seatNumber = getConvertedValue('total-seats');
// console.log(seatNumber);
// const bookedTickets = getConvertedValue('booked-tickets');
// console.log(bookedTickets);