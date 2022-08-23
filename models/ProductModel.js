const Products = require('../entities/Product')
const responseData = require('./ResponseData')


const ProductModel = {
    getAllProduct: async (req, res) => {
        try {
            let products = await Products.find();
            if (products) {
                // return res.status(200).json({
                //     "status_code": 200,
                //     "data": products,
                //     "error_messages": ""
                // });
                return res.status(200).json(responseData(200, products, ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"))
        }
        catch (err) {
            return res.status(500).json(responseData(500, [], err))
        }
    },
    getProductByName: async (req, res) => {
        try {
            let str = req.query.name;
            let products = await Products.find({ "name": { $regex: str } });
            if (products) {
                return res.status(200).json(responseData(200, products, ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"))
        }
        catch (err) {
            return res.status(500).json(responseData(500, [], err))
        }
    },
    getProductByCategory: async (req, res) => {
        try {
            let str = req.query.category;
            console.log(str);
            let products = await Products.find({ category: str });
            if (products) {
                return res.status(200).json(responseData(200, products, ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"))
        }
        catch (err) {
            return res.status(500).json(responseData(500, [], err))
        }
    },
    getProduct: async (req, res) => {
        try {
            id = req.query.id;
            if (id) {
                let product = await Products.findById({ _id: id });
                if (product) {
                    return res.status(200).json(responseData(200, product, ""));
                }
                return res.status(400).json(responseData(400, [], "Bad Request"))
            }
            return res.status(400).json(responseData(400, [], "Bad Request"))
        }
        catch (err) {
            return res.status(500).json(responseData(500, [], err))
        }
    },
    createProduct: async (req, res) => {
        try {
            let name = req.body.name;
            let CPU = req.body.CPU;
            let ram = req.body.ram;
            let hardDrive = req.body.hardDrive;
            let card = req.body.card;
            let operatingSystem = req.body.operatingSystem;
            let img = req.file.originalname;
            let price = req.body.price;
            let category = req.body.category;
            console.log("a")
            if (name && CPU && ram && hardDrive && card && operatingSystem && img && price && category) {
                const newProduct = await Products({
                    name: name,
                    CPU: CPU,
                    ram: ram,
                    hardDrive: hardDrive,
                    card: card,
                    operatingSystem: operatingSystem,
                    img: img,
                    price: price,
                    category: category,
                })
                const product = newProduct.save()
                console.log("create success")
                return res.status(200).json(responseData(200, product, ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"))
        }
        catch (err) {
            return res.status(500).json(responseData(500, [], err))
        }
    },
    updateProduct: async (req, res) => {
        try {
            let id = req.body.id
            let name = req.body.name;
            let CPU = req.body.CPU;
            let ram = req.body.ram;
            let hardDrive = req.body.hardDrive;
            let card = req.body.card;
            let operatingSystem = req.body.operatingSystem;
            let img = req.file.originalname;
            let price = req.body.price;
            let category = req.body.category;
            if (name && CPU && ram && hardDrive && card && operatingSystem && img && price && category) {
                let product = await Products.findById({
                    _id: id
                })
                product.name = name;
                product.CPU = CPU;
                product.ram = ram;
                product.hardDrive = hardDrive;
                product.card = card;
                product.operatingSystem = operatingSystem;
                product.img = req.file.originalname;
                product.price = price;
                product.category = category;
                product.save()
                return res.status(200).json(responseData(200, product, ""));
            }
            return res.status(400).json(responseData(400, [], "Bad Request"))
        }
        catch (err) {
            return res.status(500).json(responseData(500, [], err))
        }
    },
    deleteProduct: async (req, res) => {
        try {
            id = req.query.id;
            if (id) {
                let product = await Products.findById({ _id: id });
                if (product) {
                    product.delete()
                    return res.status(200).json(responseData(200, product, ""));
                }
                return res.status(400).json(responseData(400, [], "Bad Request"))

            }
            return res.status(400).json(responseData(400, [], "Bad Request"))
        }
        catch (err) {
            return res.status(500).json(responseData(500, [], err))
        }
    },
}

module.exports = ProductModel