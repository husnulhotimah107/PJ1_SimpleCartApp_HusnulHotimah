const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculateSubtotal(price, qty) {
    return price*qty;
}

function hitungdiskon(price, qty, kode) {
    const subTotal = recalculateSubtotal(price, qty);
    switch (kode) {
        case "HEMAT20":
            hasilDiskon = subTotal * 0.2;
            break;
        case "HEMAT25":
            hasilDiskon = subTotal * 0.25;
            break;
        case "HEMAT35":
            hasilDiskon = subTotal * 0.35;
            break;
        case "HEMAT50":
            hasilDiskon = subTotal * 0.5;
            break;
        default:
            hasilDiskon = 0;
            break;
    }
    return hasilDiskon;
}

function grandTotal(price, qty, kode) {
    return recalculateSubtotal(price, qty) - hitungdiskon(price, qty, kode);
}

function angka(Id, Value){
    if(isNaN(Value) || Value < 0){
        if(Id == "price"){
            return "0";
        }
        else if(Id=="qty"){
            return "1";
        }
        else{
            return "0";
        }
    }
    else{
        return Value;
    }
    
}

module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    angka,
    hitungdiskon,
    grandTotal
};
