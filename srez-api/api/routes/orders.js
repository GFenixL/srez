const express = require('express');
const orders = require('../controllers/orders');

const router = express.Router();


router.get('/', orders.getOrders);
router.post('/', orders.postOrder);

router.get('/:orderId', orders.getOrderById);
router.delete('/:orderId', orders.deleteOrderById);

module.exports = router;
