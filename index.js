const express = require('express')

require('./models/User')
require('./services/passport')

const mongoose = require('mongoose')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)


// mongoose.connect(keys.mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, {
//     auth: {
//         "authSource": "admin"
//     }
// })

const app = express();
require('./routes/authRoutes')(app)
require('./routes/general')(app)


const PORT = process.env.PORT || 5000;
app.listen(PORT)