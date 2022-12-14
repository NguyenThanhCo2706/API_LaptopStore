const Categorys = require('../entities/Category')
const responseData = require('./ResponseData')


const CategoryModel = {
    getAllCategory: async (req, res) => {
        try {
            let categorys = await Categorys.find();
            if (categorys) {
                res.status(200).json(responseData(200, categorys, ""))
            }
            else {
                res.status(400).json(responseData(400, [], "Bad Request"));
            }
        }
        catch (err) {
            res.status(405).json(responseData(405, [], err));
        }
    },
    createCategory: async (req, res) => {
        try {
            let name = req.body.name;
            console.log(name);
            if (name) {
                const newCategory = await Categorys({
                    name: name,
                })
                const category = newCategory.save()
                console.log("create success")
                res.status(200).json(responseData(200, category, ""))
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

module.exports = CategoryModel