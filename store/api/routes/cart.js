const { Router } = require("express");
const { verifyTokenAndAdmin, verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");
const Cart = require("../models/Cart.js")


const router = Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
});



//UPDATE

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500).json(error);
    }

});

//DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...")
    } catch (error) {
        res.status(500).json(error);
    };
});


//GET USER CART

router.get("/find/:userId", verifyTokenAndAuthorization,  async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.id });
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error);
    };
});





// GET ALL PRODUCTS

 router.get("/", verifyTokenAndAdmin, async (req, res ) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
 })







module.exports = router;