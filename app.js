import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-sessions'
import api from './routers/api'

const app = express();
// app.use(session({
//      saveUninitialized: false,
//      resave : false,
//      secret : "wow"
// }))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// app.use(session({
//     secret: 'heyyyyyy',
//     resave: true,
//     saveUninitialized: false,
// }));

app.use('/', express.static('./public'))
app.use('/api', api)

app.listen(8081, () => {
    console.log('Server OK');
})

