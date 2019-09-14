const express = require('express')
const port = 3000

const app = express()

app.get('/', (req, res) => {
    res.send('hola mundo')
})

app.listen(port, () => {
    console.log(`server listen in port ${port}`);
    
})
