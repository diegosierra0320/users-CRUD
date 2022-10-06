const express = require('express');

const app = express()

const usersRouter = require('./users/users.router')

const port = 9000

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})

app.use("/", usersRouter)


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})