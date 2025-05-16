const express = require('express');
const app = express()
app.get('/', (req, res) =>res.json({message: 'Hello World!'}))
app.listen(process.env.PORT || 5001)

// ready to deploy, watch video at 3:50