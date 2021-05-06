function calculateBill(price, vat, tip) {
    if (price || tip || vat === !Number)
    return "error"

    const total = (price + (price * vat /100) + tip).toString();
    let currency = "£"
    return currency + total 


};


module.exports = calculateBill;
