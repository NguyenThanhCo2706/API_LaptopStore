const DetailOrders = require('../models/DetailOrder')

const detailOrderController = {
    getOrderDetailAsync: async (req, res) => {
        try {
            let customer = req.query.customerId;
            if (customer) {
                const detailOrders = await DetailOrders.find({ customer: customer, orderId: null })
                return res.status(200).json(detailOrders)
            }
            return res.status(404).json('InValid Input')
        }
        catch (err) {
            res.staus(500).json('Not found')
        }

    },
    createDetailOrder: async (req, res) => {
        try {
            let productId = req.body.productId;
            let customer = req.body.customerId;
            let amount = req.body.amount;
            console.log(productId, customer, amount)
            if (productId && customer && amount) {
                const details = await DetailOrders.findOne({
                    productId: productId,
                    customer: customer,
                    orderId: null
                })
                if (details) {
                    details.amount += 1;
                    details.save()
                    return res.status(200).json(details)
                }
                const newDetail = await DetailOrders({
                    productId: productId,
                    customer: customer,
                    amount: amount
                })
                newDetail.save()
                console.log("create success")
                res.status(200).json(newDetail)
            }
            else {
                res.status(500).json('Input invalid')
            }
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    uppdateOrderId: async (req, res) => {
        try {
            let customer = req.body.customerId;
            let orderId = req.body.orderId;
            console.log(customer, orderId)
            if (customer && orderId) {
                const detailOrders = await DetailOrders.updateMany(
                    { customer: customer, orderId: null }, { orderId: orderId }
                )

                detailOrders.save()
                console.log("update success")
                res.status(200).json(detailOrders)
            }
            else {
                res.status(404).json('Input invalid')
            }
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    deleteDetailOrder: async (req, res) => {
        try {
            id = req.query.id;
            if (id) {
                let detailOrder = await DetailOrders.findById({ _id: id });
                if (detailOrder) {
                    detailOrder.delete()
                    res.status(200).json(detailOrder);
                }
                else {
                    res.status(500).json('DetailOrder not found')
                }
            }
            else {
                res.status(500).json('Id invalid')
            }
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
}

module.exports = detailOrderController