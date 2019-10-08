function SalesOrderItem(product, price, quantity) {
    let salesorderitem = {};
    salesorderitem.product = product;
    salesorderitem.price = price;
    salesorderitem.quantity = quantity;

    salesorderitem.getPrice = function() {
        return price * quantity;
    }
    return salesorderitem;
}
console.log(SalesOrderItem)
module.exports = SalesOrderItem;



