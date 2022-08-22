const jwt = require('jsonwebtoken')
const Categorys = require('../entities/Category')

const CategoryModel = {
    getAllCategory: async (req, res) => {
        try {
            let categorys = await Categorys.find();
            if (categorys) {
                res.status(200).json(categorys);
            }
            else {
                res.status(500).json('No category found')
            }
        }
        catch (err) {
            res.status(500).json(err)
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
                res.status(200).json(category)
            }
            else {
                res.status(500).json('Input invalid')
            }
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
}

module.exports = CategoryModel