const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'orders_for_app',
    password: 'qwe',
    port: 5432,
});

const getOrders = (request, response) => {
    pool.query('select * from orders', (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const getOrdersById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('select * from orders where order_id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const postOrders = (request, response) => {
    const {user_id} = request.body;
    console.log(request.body)
    pool.query('insert into orders(user_id) values ($1) returning *',[user_id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json({message: "added"});
    });
};

const putOrders = (request, response) => {
    const id = request.params.id
    const {user_id} = request.body;
    pool.query('update orders set user_id = $1 where order_id = $2', [user_id, id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json({message:"Updated"});
    });
};

const deleteOrders = (request, response) => {
    const id = request.params.id
    pool.query('delete from orders where order_id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).send('Deleted');
    });
};

const getServices = (request, response) => {
    pool.query('select * from service', (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const getServicesById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('select * from service where service_id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const userAuthorization = (request, response) => {
    const {user_login, user_password} = request.body;
    pool.query('select * from users where user_login = $1 and user_password = $2', [login, password], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    });
};

const getToken = (req, res, next) => {
    const token = req.headers.token;

    pool.query('select * from sessions where token = $1 order by exp_date desc', [token], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getOrders,
    getOrdersById,
    postOrders,
    putOrders,
    deleteOrders,
    getServices,
    getServicesById,
    userAuthorization,
}