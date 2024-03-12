import express from "express"
import bookRoute from './routes/book.js'
import bodyParser from "body-parser"
import dotenv from "dotenv";
dotenv.config();

const app = express()
const port = 2404

app.use(bodyParser.json())
app.use('/api', bookRoute)

// const authAdmin = function (req, res, next) { 
//     return next(); 
//    } 
//    const getUsers = function (req, res, next) {
//     return next();
//    }
//    const renderUsers = function (req, res) { 
//     res.end(); 
//    }
//    const admin = [authAdmin, getUsers, renderUsers];
//    app.get('/admin', admin);


// app.get('/api/v1/stories/:id', function(req,res, next) { 
//     //do authorization
//     //if not authorized or there is an error 
//     //return next(error);
//     //if authorized and no errors 
//     return next(); 
//   }), function(req,res, next) {
//    //extract id and fetch the object from the database
//    //assuming no errors, save story in the request object 
//     req.story = story;
//     return next(); 
//   }, function(req,res) {
//    //output the result of the database search 
//     res.send(res.story);
//   }

// app.get('/name/:user_name', function(req,res) {
//     res.status(200);
//     res.set('Content-type', 'text/html');
//     res.send('<html><body>' +
//     '<h1>Hello ' + req.params.user_name + '</h1>' +
//     '</body></html>'
//     );
//   });

// // app.get('/', (req, res) =>{
// //     res.send('Hello World')
// // })

// // app.post('/', (req, res) => {
// //     res.send('How are you doing today')
// // })

// // app.all('/secret', (req, res, next) =>{
// //     res.send('Accessing your secret files')
// //     next()
// // })

// app.get('/ab?cd', (req, res) => {
//     res.send('Testing Abcd')
// });

// app.get('/ab+cd', (req, res) => {
//     res.send('Testing Addition')
// });

// app.get('/ab*cd', (req, res) => {
//     res.send('Testing Anything')
// });

// // app.get(/a/, (req, res) => {
// //     res.send('Noticed an A in your URL')
// // });

// app.get(/.*fly$/, function (req, res) {
//     res.send('Noticed FLY at the end of your URL');
//   })

// app.get('/', function (req, res) {
//     res.send('GET request to the homepage');
//   }).post('/', function (req, res) {
//     res.send('POST request to the homepage');
//   }).all('/secret', function (req, res, next) {
//     console.log('Accessing the secret section ...');
//     next(); // pass control to the next handler
//   }).use(function(req, res, next){
//       res.status(404).send('Page introuvable !');
//   });

app.listen(port, () => console.log(`server is running on http://localhost:${port}`))


export default app