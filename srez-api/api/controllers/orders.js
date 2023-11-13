const seq = require('../models/index')
const createError = require("http-errors");

const getOrders = async (req, res, next) => {
    const orders = await seq.orders.findAll();

    res.status(200).json(orders);
}

const getOrderById = async (req, res, next) => {
    const id = req.params.orderId;

    const order = await seq.orders.findOne({
        where: {
            order_id: id,
        }
    });

    if (!order) return next(createError(404));

    const items = await seq.orders_services.findAll({
        where: {
            order_id: id
        }
    });
    let fullItems = [];
    for (const item of items) {
        const service = await seq.services.findOne({
            where: {
                service_id: item.service_id
            }
        });
        fullItems.push({
            service: service,
            count: item.Count
        });
    }

    res.status(200).json({
        order_id: order.order_id,
        user_id: order.user_id,
        Items: fullItems
    });
}

const postOrder = (req, res, next) => {

}

const deleteOrderById = (req, res, next) => {

}

module.exports = {
    getOrders,
    getOrderById,
    postOrder,
    deleteOrderById
}