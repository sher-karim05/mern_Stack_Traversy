const express = require("express");
const router = express.Router();

const {setList, getList, updateList, deleteList} = require('../controller/todoController')

//get and post requests
    router.route('/').get(getList).post(setList)

//update and delete requests
router.route("/:id/").put(updateList).delete(deleteList)

module.exports = router;
