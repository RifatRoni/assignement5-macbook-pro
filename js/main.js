/*------------------------------------------------------------------
                        Get Total Price Function
------------------------------------------------------------------*/
function getTotalPrice() {
    const bestMainPrice = document.getElementById('best-main-price').innerText;
    const bestPriceNumber = parseInt(bestMainPrice);

    const costForMemory = document.getElementById('memory-cost').innerText;
    const memoryPriceAmount = parseInt(costForMemory);

    const costForStorage = document.getElementById('storage-cost').innerText;
    const storagePriceAmount = parseInt(costForStorage);

    const costForDelivery = document.getElementById('delivery-cost').innerText;
    const deliveryPriceAmount = parseInt(costForDelivery);

    const total = bestPriceNumber + memoryPriceAmount + storagePriceAmount + deliveryPriceAmount;
    return total;
}


/*------------------------------------------------------------------
                Set Gross Total and Net Total Function
------------------------------------------------------------------*/
function setPrice(totalAmount) {
    const totalPrice = document.getElementById('gross-total-cost');
    totalPrice.innerText = totalAmount;

    const total = document.getElementById('net-total-cost');
    total.innerText = totalAmount;
}


/*------------------------------------------------------------------
                Set product extra cost function
------------------------------------------------------------------*/
function setProductCost(ProductId, price) {
    const productCost = document.getElementById(ProductId);
    productCost.innerText = price;
}


/*------------------------------------------------------------------
            basic 8GB Memory button click Handler Event 
------------------------------------------------------------------*/
document.getElementById('basic-memory-8gb').addEventListener('click', function () {

    setProductCost('memory-cost', 0);
    const total = getTotalPrice();
    setPrice(total);
});


/*------------------------------------------------------------------
            Update 16GB Memory button click Handler Event 
------------------------------------------------------------------*/
document.getElementById('update-memory-16gb').addEventListener('click', function () {
    setProductCost('memory-cost', 180);
    const total = getTotalPrice();
    setPrice(total);
});


/*------------------------------------------------------------------
            basic 256GB Storage button click Handler Event 
------------------------------------------------------------------*/
document.getElementById('basic-storage-256gb').addEventListener('click', function () {
    setProductCost('storage-cost', 0);
    const total = getTotalPrice();
    setPrice(total);
});


/*------------------------------------------------------------------
            Medium 512GB Storage button click Handler Event 
------------------------------------------------------------------*/
document.getElementById('medium-storage-512gb').addEventListener('click', function () {
    setProductCost('storage-cost', 100);
    const total = getTotalPrice();
    setPrice(total);
});


/*------------------------------------------------------------------
            High 1TB Storage button click Handler Event 
------------------------------------------------------------------*/
document.getElementById('hight-storage-high-1tb').addEventListener('click', function () {
    setProductCost('storage-cost', 180);
    const total = getTotalPrice();
    setPrice(total);
});


/*------------------------------------------------------------------
            FREE Delivery button click Handler Event 
------------------------------------------------------------------*/
document.getElementById('free-delivery').addEventListener('click', function () {
    setProductCost('delivery-cost', 0);
    const total = getTotalPrice();
    setPrice(total);
});


/*------------------------------------------------------------------
            Charged Delivery button click Handler Event 
------------------------------------------------------------------*/
document.getElementById('charged-delivery').addEventListener('click', function () {
    setProductCost('delivery-cost', 20);
    const total = getTotalPrice();
    setPrice(total);
});


/*------------------------------------------------------------------
            Promo Code button click Handler Event 
------------------------------------------------------------------*/
document.getElementById('apply-promo-button').addEventListener('click', function () {
    const promoCode = document.getElementById('mac-promo-code').value;
    const totalAmount = document.getElementById('net-total-cost');
    if (promoCode == 'stevekaku') {
        const total = getTotalPrice() * 0.8;
        totalAmount.innerText = total;
    }
    document.getElementById('mac-promo-code').value = '';
});