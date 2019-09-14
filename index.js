const express = require('express')
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080

const app = express()

app.get('/', (req, res) => {
    res.send('hola mundo')
})
 
app.listen(server_port,() => {
  console.log( `server listen in port ${server_port}` )
});