const Products = require('../entities/Product')

const ProductModel = {
    getAllProduct: async (req, res) => {
        try {
            let products = await Products.find();
            if (products) {
                return res.status(200).json(products);
            }
            return res.status(400).json('Bad Request')
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    getProductByName: async (req, res) => {
        try {
            let str = req.query.name;
            let products = await Products.find({ "name": { $regex: str } });
            if (products) {
                return res.status(200).json(products);
            }
            return res.status(400).json('Bad Request')
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    getProductByCategory: async (req, res) => {
        try {
            let str = req.query.category;
            console.log(str);
            let products = await Products.find({ category: str });
            if (products) {
                return res.status(200).json(products);
            }
            return res.status(400).json('Bad Request')
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    getProduct: async (req, res) => {
        try {
            id = req.query.id;
            if (id) {
                let product = await Products.findById({ _id: id });
                if (product) {
                    return res.status(200).json(product);
                }
                return res.status(400).json('Bad Request')
            }
            return res.status(400).json('Bad Request')
        }
        catch (err) {
            return res.status(500).json(err)
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
                return res.status(200).json(product)
            }
            return res.status(400).json('Bad Request')
        }
        catch (err) {
            return res.status(500).json(err)
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
                return res.status(200).json(product)
            }
            return res.status(400).json('Bad Request')
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            id = req.query.id;
            if (id) {
                let product = await Products.findById({ _id: id });
                if (product) {
                    product.delete()
                    return res.status(200).json(product);
                }
                return res.status(400).json('Bad Request')

            }
            return res.status(400).json('Bad Request')
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
}

module.exports = ProductModel