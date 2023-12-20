const express = require('express');
const dotenv = require('dotenv').config()
const {errorHandler}  = require('./middleware/errorMiddleware')
const port = 8080

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/todolist', require('./routes/todoRoutes'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port:http://localhost:${port}`)
})