const DetailOrders = require('../entities/DetailOrder')
const responseData = require('./ResponseData')

const DetailOrderModel = {
    getOrderDetailAsync: async (req, res) => {
        try {
            let customer = req.query.customer;
            if (customer) {
                const detailOrders = await DetailOrders.find({ customer: customer, orderId: null })
                return res.status(200).json(responseData(200, detailOrders, ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"));
        }
        catch (err) {
            res.staus(405).json(responseData(405, [], err));
        }
    },
    viewDetailOrder: async (req, res) => {
        try {
            let orderId = req.query.orderId;
            console.log(orderId)
            if (orderId) {
                const detailOrders = await DetailOrders.find({ orderId: orderId })
                return res.status(200).json(responseData(200, detailOrders, ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"));
        }
        catch (err) {
            res.staus(405).json(responseData(405, [], err));
        }
    },
    createDetailOrder: async (req, res) => {
        try {
            let product = req.body.product;
            let customer = req.body.customer;
            let amount = req.body.amount;
            console.log(product, customer, amount)
            if (product && customer && amount) {
                const details = await DetailOrders.findOne({
                    product: product,
                    customer: customer,
                    orderId: null
                })
                if (details) {
                    details.amount += 1;
                    details.save()
                    return res.status(200).json(details)
                }
                const newDetail = await DetailOrders({
                    product: product,
                    customer: customer,
                    amount: amount
                })
                newDetail.save()
                console.log("create success")
                return res.status(200).json(newDetail)
            }
            else {
                return res.status(400).json(responseData(400, [], "Bad Request"));
            }
        }
        catch (err) {
            res.status(405).json(responseData(405, [], err));
        }
    },
    uppdateDetailOrder: async (req, res) => {
        try {
            let customer = req.body.customer;
            let orderId = req.body.orderId;
            console.log(customer, orderId)
            if (customer && orderId) {
                const detailOrders = await DetailOrders.updateMany(
                    { customer: customer, orderId: null }, { orderId: orderId }
                )

                detailOrders.save()
                console.log("update success")
                res.status(200).json(responseData(200, detailOrders, ""));
            }
            else {
                res.status(400).json(responseData(400, [], "Bad Request"));
            }
        }
        catch (err) {
            res.status(405).json(responseData(405, [], err));
        }
    },
    deleteDetailOrder: async (req, res) => {
        try {
            id = req.query.id;
            if (id) {
                let detailOrder = await DetailOrders.findById({ _id: id });
                if (detailOrder) {
                    detailOrder.delete()
                    res.status(200).json(responseData(200, detailOrder, ""));;
                }
                else {
                    res.status(400).json(responseData(400, [], "Bad Request"));
                }
            }
            else {
                res.status(400).json(responseData(400, [], "Bad Request"));
            }
        }
        catch (err) {
            res.status(405).json(responseData(405, [], err));
        }
    },
}

module.exports = DetailOrderModel