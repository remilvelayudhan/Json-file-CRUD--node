
const router = require('express').Router();
const {getAllUser,getUserById,deleteUser,updateUser} = require('../controller/userController');


router.get('/:id',getUserById);
router.get("/",getAllUser);
router.delete("/:id",deleteUser);
router.put("/",updateUser);

module.exports =router;