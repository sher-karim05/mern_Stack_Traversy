const asyncHandler = require('express-async-handler');
//@desc    Get todoist
//@route   GET/api/todolist
//@access  Private
const getList = asyncHandler ('/:id', async (req, res) => {
    res.status(200).json({message: "Get items"});
})
//@desc    Set lists
//@route   POST/api/todolist
//@access  Private
const setList = asyncHandler ('/', async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: "Add new item"});
})
//@desc    PUT List
//@route   PUT/api/list/:id
//@access  Private
const updateList = asyncHandler ('/:id', async (req, res) => {
    res.status(200).json({message: `Update list item ${req.params.id}`});
})
//@desc    Delete List
//@route   Delete/api/list:id/
//@access  Private
const deleteList = asyncHandler ('/:id', async (req, res) => {
    res.status(200).json({message: `Delete list item ${req.params.id}`});
})

module.exports ={
    getList,
    setList,
    updateList,
    deleteList,
}