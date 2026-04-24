function discount(totalamount) {
    let rate = totalamount> 100 ? 0.1: 0.05;
    return totalamount * rate;
}