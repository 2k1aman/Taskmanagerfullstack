const router  =  require('express').Router();
const {register} = require('../controllers/register');
const {login} = require('../controllers/login');
const {addTask} = require('../controllers/addTask');
const {updateTask} = require('../controllers/updateTask');
const {deleteTask} = require('../controllers/deleteTask');
const {getTask} = require('../controllers/getTask');

router.post("/register",register);
router.post("/login",login);
router.post("/addTask",addTask);
router.put("/updateTask/:id",updateTask);
router.delete("/deleteTask/:id",deleteTask);
router.get("/getTask/:id",getTask);

module.exports = router;