function SalesOrder(customer, salesTaxRate, ArrayOfitems) {
    let salesOrder = {};
    salesOrder.customer = customer;
    salesOrder.salesTaxRate = salesTaxRate;
    salesOrder.ArrayOfitems = ArrayOfitems;

    salesOrder.getValue = function() {
        totalValue = 0.0;
        salesOrder.ArrayOfitems.forEach(item => {
            totalValue = totalValue + ((item.price) * item.quantity);
        });
        return totalValue;
    }


    salesOrder.getTotalValue = function () {
        priceWithoutSalesTax = salesOrder.getValue();
        priceWithSalesTax = salesOrder.getValue() + (priceWithoutSalesTax * salesOrder.salesTaxRate);
        return priceWithSalesTax;
    }

    return salesOrder;
}

module.exports = SalesOrder;