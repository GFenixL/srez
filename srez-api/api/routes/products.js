const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling get for products'
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling post for products'
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === '100') {
    res.status(200).json({
      message: 'Special Id..',
      id
    });
  } else {
    res.status(200).json({
      message: 'Id is passed',
      id
    });
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated Product'
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'deleted Product'
  });
});
module.exports = router;
