// const allBtn = document.getElementsByClassName('btn-ghost');

// let tickets=2200;
// let seats = 12;
// let count = 0;
// for (const btn of allBtn) {
//     btn.addEventListener('click', function (e) {
//         seats = seats - 1;
//         count = count + 1;
//         // const btn=e.target;
//         // console.log(btn);
//         const seatName = e.target.parentNode.childNodes[3].innerText;
//         const ticketReceipt = document.getElementById('ticket-receipt');
//         const li = document.createElement('li');
//         const p1 = document.createElement('p');
//         p1.innerText = seatName;
//         const p = document.createElement('p');
//         p.innerText = 'Economy';
//         const p2 = document.createElement('p');

//         //button background and click function
//         e.target.style.backgroundColor = '#1DD100';
//         e.target.setAttribute("disabled", false);

//         p2.innerText = 550;
//         const ticketPrice = p2.innerText;
//         li.appendChild(p1);
//         li.appendChild(p);
//         li.appendChild(p2);
//         ticketReceipt.appendChild(li);

//         const totalPrice = document.getElementById('total-price').innerText
//         const convertedTotalPrice = parseInt(totalPrice);
//         const sum = convertedTotalPrice + parseInt(ticketPrice);

//         const grandTotal = document.getElementById('grand-total').innerText
//         const convertedGrandTotal = parseInt(grandTotal);
//         const sum2 = convertedGrandTotal + parseInt(ticketPrice);

//         // maximum ticket purchased :4
//         if (sum2 > 2200) {
//             alert("you can't select more than 4 tickets")
//             return;
//         }
//         // totalPrice('total-price',parseInt(p2.innerText))
        
//         setInnerText('grand-total', sum2);
//         setInnerText('total-price', sum);
//         setInnerText("total-seats", seats);
//         setInnerText("booked-tickets", count);
        
//     })
// }

// //total price,grand total function
// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }

// // coupon section
// const btn = document.getElementById('apply-btn');
// btn.addEventListener('click', function () {

//     const couponElement = document.getElementById('input-field').value;
//     const couponCode = couponElement.split(" ").join('').toUpperCase();
//     console.log(couponCode);
//     if (tickets>=2200){
//         if (couponCode === 'NEW15') {
//             const discountElement = document.getElementById('grand-total');
//             const discountAmount = tickets * 0.85
//             discountElement.innerText = discountAmount.toFixed(2)
//         }else if(couponCode === 'Couple 20') {
//             const discountAmount = tickets * 0.80
//             discountElement.innerText = discountAmount.toFixed(2)
//         }
        
//         else {
//             alert('Invalid coupon')
    
//         }
//     }
// })