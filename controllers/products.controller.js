const fs = require('fs');
const path = require("path");
const getData = async(req,res) =>{
    try {
        let productData = fs.readFileSync(path.resolve(__dirname,'../schema.json'),'utf-8');
        res.json(JSON.parse(productData))        
    } catch (error) {
        console.log(error);
        res.status(500)
        res.send('Server Error')
    }

}

const addProduct = async(req,res) => {

    //get product details form req.body
    //await a database call to add product. 
    res.send('product added succesfully')
}

module.exports = {
    getData,
    addProduct
}