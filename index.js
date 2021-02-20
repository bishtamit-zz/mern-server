const express = require('express')

const app = express();


app.get('/', (req, res) => {
    res.send({
        hi: 'world'
    })
})

const PORT = process.env.PORT || 5000
console.log('listening on ', PORT)

app.listen(PORT)
