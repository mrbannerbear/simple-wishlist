
var totalPrice = 0;

function mainFunc(target){
    let productName = target.parentNode.parentNode.childNodes[1].firstChild.innerText,
        brandName = target.parentNode.parentNode.childNodes[3].innerText,
            productInfo = productName + " " + "(" + brandName + ")";
    let productPrice = target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

    if(productPrice.includes(".") === false){
        productPrice = productPrice + ".00"
    }

  
    let liInfo = document.createElement('li');
    liInfo.innerText = productInfo;
    liInfo.classList.add('mb-2')
    document.getElementById('itemInfo').append(liInfo)

    let liPrice = document.createElement('p');
    liPrice.innerText = productPrice;
    document.getElementById('itemPrice').append(liPrice);

    totalPrice = totalPrice + parseFloat(liPrice.innerText);
            document.getElementById('totalSum').innerHTML =  `$${parseFloat(totalPrice.toFixed(2))}`
           

            document.getElementById('totalSumFinal').innerHTML = `$${parseFloat(totalPrice.toFixed(2))} `

     document.getElementById('totalName').style.display = 'block'
    document.getElementById('discount').style.display = "block";
    document.getElementById('finalTotal').style.display = "flex";
    document.getElementById('checkoutId').style.display = "block";
    document.getElementById('sticky').style.position = 'sticky'

    // Coupon

        // Apply Coupon
        document.getElementById('couponA').addEventListener('click', function(){
            if(document.getElementById('couponMain').style.display === 'none'){
                document.getElementById('couponMain').style.display = 'block';
                document.getElementById('couponA').style.display = 'none';
            } else{document.getElementById('couponMain').style.display = 'none';}
        })

        // applyBtn
        document.getElementById('applyBtn').addEventListener('click', function(){
            if(document.getElementById('couponInput').value === "FLAMINGO30" ){
                   totalSumFinal.innerHTML = `$${parseFloat(totalPrice.toFixed(2)) - (parseFloat(totalPrice.toFixed(2)) * 0.3) } `
            } else{
                totalSumFinal.innerHTML = `$${parseFloat(totalPrice.toFixed(2))}`
            }
        })

        
        // noApply
        document.getElementById('noApply').addEventListener('click', function(){
            if(document.getElementById('couponA').style.display === 'none'){
                document.getElementById('couponA').style.display = 'block';
                document.getElementById('couponMain').style.display = 'none';
                totalSumFinal.innerHTML = `$${parseFloat(totalPrice.toFixed(2))}`;
            } else{document.getElementById('couponA').style.display = 'none';}
        })

}

function removeFunc(target){
    target.parentNode.parentNode.parentNode.style.display = 'none'
}





