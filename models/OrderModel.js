const Order = require('../entities/Order')
const DetailOrders = require('../entities/DetailOrder')
const responseData = require('./ResponseData')


const OrderModel = {
    getAllOrder: async (req, res) => {
        try {
            let orders = await Order.find().sort({ _id: -1 });
            if (orders) {
                return res.status(200).json(responseData(200, orders, ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"));
        }
        catch (err) {
            res.status(405).json(responseData(405, [], err));
        }
    },
    getOrderToComfirm: async (req, res) => {
        try {
            let orders = await Order.find({ isComfirm: false });
            if (orders) {
                res.status(200).json(responseData(200, orders, ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"));
        }
        catch (err) {
            res.status(405).json(responseData(405, [], err));
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
                await order.save();
                return res.status(200).json(responseData(200, await Order.find().sort({ _id: -1 }), ""))
            }
            return res.status(400).json(responseData(400, [], "Bad Request"));
        }
        catch (err) {
            res.staus(405).json(responseData(405, [], err));
        }

    },
    createOrder: async (req, res) => {
        const customer = req.body.customer
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
                return res.status(200).json(responseData(200, [], ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"));
        }
        catch (err) {
            res.staus(405).json(responseData(405, [], err));
        }
    },
}

module.exports = OrderModel