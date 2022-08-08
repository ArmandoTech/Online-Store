const express= require('express');
const router= express.Router();
const ProductServices= require('./../services/products.services')
const { createProductSchema, getProductSchema, updateProductSchema, deteleProductsSchema } = require('../schemas/products.schemas')
const validatorHandler= require('../middlewares/validator.handler')

const services= new ProductServices()

router.get('/', async (req, res) => {
  const getProducts= await services.find()

  res.json(getProducts)
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id }= req.params
      const getProduct= await services.findOne(id)

      res.json(getProduct)
    } catch (err) {
        next(err)
    }

  })

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body= req.body;
    const newProduct= await services.create(body)

    res.status(201).json({
      message: 'Product created',
      info: body,
    })
  })

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id }= req.params
      const body= req.body
      const updateProduct= await services.update(id, body)

      res.json(updateProduct)
    } catch (err) {
        next(err)
      }
    })

router.delete('/:id', async (req, res) => {
  validatorHandler(deteleProductsSchema, 'params')
  const { id }= req.params
  const deleteProduct= await services.delete(id)

  res.json({
    deleteProduct,
    message: 'Deleted',
  })
})

module.exports= router;
