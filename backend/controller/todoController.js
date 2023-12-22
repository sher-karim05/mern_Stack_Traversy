const asyncHandler = require('express-async-handler');
const TodoList = require('../model/todoModel')
//@desc    Get todoist
//@route   GET/api/todolist
//@access  Private
const getList = asyncHandler (async (req, res) => {
    const list = await TodoList.find()
    res.status(200).json(list)
})
//@desc    Set lists
//@route   POST/api/todolist
//@access  Private
const setList = asyncHandler ( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const createlist = await TodoList.create({
        text: req.body.text
    })
    res.status(200).json(createlist)
})
//@desc    PUT List
//@route   PUT/api/list/:id
//@access  Private
const updateList = asyncHandler ( async (req, res) => {
    const lists = await TodoList.findById(req.params.id)

    if(!lists) {
        res.status(400)
        throw new Error('List not found')
    }

    const updatedlist = await TodoList.findByIdAndUpdate(req.params.id, req.body, {new : true});

    res.status(200).json(updatedlist) 
})
//@desc    Delete List
//@route   Delete/api/list:id/
//@access  Private
const deleteList = asyncHandler ('/:id', async (req, res) => {
    const lists = await TodoList.findById(req.params.id)

    if(!lists) {
        res.status(400)
        throw new Error('List not found')
    }
    await lists.remove()
    res.status(200).json({id: req.params.id}) 
})

module.exports ={
    getList,
    setList,
    updateList,
    deleteList,
}