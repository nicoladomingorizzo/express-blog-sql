
//import connection
const connection = require('../db/connection');

//function for index
function index(req, res) {
    //create a const for query to select all products
    const sql = 'SELECT * FROM `posts`';
    //create a connection.query to see if an error occured or response a json
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({
            error: true,
            message: err.message
        });
        console.log(results);
        res.json(results);
    });
};

//function for show
function show(req, res) {
    // create a const for id with parseInt
    const id = parseInt(req.params.id);
    //create a const for query to select product by id
    const sql = 'SELECT * FROM `posts` WHERE `id` = ? ;';
    console.log(sql);
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({
            error: true,
            message: err.message
        });
        console.log(results);
        if (!results.length > 0) {
            //return a json with error 404
            return res.status(404).json({
                error: true,
                message: 'Not found'
            });
        };
        res.json(results[0]);
    });
};

//function for store
function store(req, res) {
    //create a const with title, content, image
    const { title, content, image } = req.body;
    //create a const to insert a new pizza
    const sql = 'INSERT INTO `posts` (title, content, image) VALUES (?, ?, ?);';
    connection.query(sql, [title, content, image], (err, results) => {
        if (err) return res.status(500).json({
            errore: true,
            message: err.message
        });
        console.log(results);
        if (results.affectedRows === 0) {
            return res.status(404).json({
                error: "true",
                message: "Not found"
            });
        };
        res.status(201).json({ id: results.insertId });
    });
};

//function for update
function update(req, res) {
    const id = parseInt(req.params.id);
    //create a const with title, content, image
    const { title, content, image } = req.body;
    //create a const to insert a new pizza0
    const sql = 'UPDATE `posts` SET title = ?, content = ?, image = ? WHERE id  = ? ;';
    connection.query(sql, [title, content, image, id], (err, results) => {
        if (err) return res.status(500).json({
            errore: true,
            message: err.message
        });
        console.log(results);
        res.json({ success: true, message: 'Post updated successfull' });
    });
};

//function for modify
function modify(req, res) {

};

//function for destroy
function destroy(req, res) {
    // create a const for id with parseInt
    const id = parseInt(req.params.id);
    //create a const for query to select product by id
    const sql = 'DELETE FROM `posts` WHERE `id` = ? ;';
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({
            error: true,
            message: err.message
        });
        console.log(results);
        if (affectedRows === 0) {
            return res.status(404).json({
                error: true,
                message: "Not found"
            });
        };
        res.sendStatus(204);
    });
};

//exports controller
module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};