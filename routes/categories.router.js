const express= require('express');
const router= express.Router();

router.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId }= req.params
  res.json({
    categoryId,
    productsId,
  })
})

router.post('/', (req, res) => {
  const body= req.body

  res.json({
    message: 'Created',
    body: body,
  })
})

router.patch('/:id', (req, res) => {
  const { id }= req.params
  const body= req.body

  res.json({
    id,
    message: 'Updated',
    body: body,
  })
})

router.delete('/:id', (res, req) => {
  const { id } = req.params
  const body= req.body

  res.json({
    id,
    message: 'Deleted',
    body: body,
  })
})

module.exports= router
