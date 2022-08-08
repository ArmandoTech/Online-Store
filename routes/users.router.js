const express= require('express');
const router= express.Router();

router.get('/', (req, res) => {
  const { limit, offset }= req.query
  if (limit || offset) {
    res.json({
      limit,
      offset,
    })
  } else{
    res.json([{
      name: 'User 1',
      age: '20',
    },
    {
      name: 'User 2',
      age: '30',
    },
    ])
  }
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
    message: 'Updated',
    id,
    body: body,
  })
})

router.delete('/:id', (req, res) => {
  const { id }= req.params
  const body= req.body

  res.json({
    message: 'Deleted',
    id,
    body: body,
  })

})

module.exports= router
