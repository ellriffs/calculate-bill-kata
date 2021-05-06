function calculateBill(price, vat, tip) {
    
    const total = (price + (price * vat /100) + tip).toString();
    let currency = "£"
    return currency + total 


};


module.exports = calculateBill;
