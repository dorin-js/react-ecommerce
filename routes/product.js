const Product = require("../models/Product");
const router = require("express").Router();
const CryptoJs = require("crypto-js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json(err);
  }
});

//GET
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL PRODUCTS
router.get("/get", async (req, res) => {
  const query_new = req.query.new;
  const query_category = req.query.category;
  try {
    let products;
    if (query_new) {
      products = await Product.find(sort({ createdAt: -1 })).limit(5);
    } else if (query_category) {
      products = await Product.find({
        category: {
          $in: [query_category],
        },
      });
    } else products = await Product.find();
    // const products = query
    //   ? await Product.find().sort({ _id: -1 }).limit(5)
    //   : await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
