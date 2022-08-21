const Order = require('../models/Order')
const DetailOrders = require('../models/DetailOrder')

const orderController = {
    getAllOrder: async (req, res) => {
        try {
            let orders = await Order.find();
            if (orders) {
                res.status(200).json(orders);
            }
            else {
                res.json({ status: 'Not found!' })
            }
        }
        catch (err) {
            res.json({ status: 'Error' })
        }
    },
    getOrderToComfirm: async (req, res) => {
        try {
            let orders = await Order.find({ isComfirm: false });
            if (orders) {
                res.status(200).json(orders);
            }
            else {
                res.json({ status: 'Not found!' })
            }
        }
        catch (err) {
            res.json({ status: 'Error' })
        }
    },
    comfirmOrder: async (req, res) => {
        try {
            let admin = req.body.admin;
            let orderId = req.body.orderId;
            console.log(admin + ' ' + orderId);

            if (admin && orderId) {
                const order = await Order.findById({ _id: orderId })
                order.isComfirm = true;
                order.admin = admin;
                console.log(order)
                order.save();
                return res.status(200).json(await Order.find())
            }
            return res.status(404).json('InValid Input')
        }
        catch (err) {
            res.staus(500).json('Not found')
        }

    },
    createOrder: async (req, res) => {
        const customer = req.query.customerId
        console.log(customer)
        try {
            if (customer) {
                let detailOrders = await DetailOrders.find({
                    customer: customer,
                    orderId: null
                })
                let order = await Order.create({
                    customer: customer,
                })
                for (index in detailOrders) {
                    detailOrders[index].orderId = order._id
                    detailOrders[index].save()
                }
                return res.status(200).json('success')
            }
            return res.status(404).json('InValid Input')
        }
        catch (err) {
            res.staus(500).json('Not found')
        }
    },
}

module.exports = orderController