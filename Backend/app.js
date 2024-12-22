const express = require('express')
const app = express()

app.get('/', (req, resp) => {
    resp.send('running')
})

app.listen(3002)