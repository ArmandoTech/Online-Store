const express= require('express');
const routerApi= require('./routes/index.js');
const { logError, errorHandler, boomErrorHandler }= require('./middlewares/error.handler.js')
const cors= require('cors')

const app= express();
const port= 3000;

const whitelist= ['https://localhost:8080', 'https://myapp.com']
const options= {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback (new Error ('Not allowed'))
    }
  }
}
app.use(express.json())

app.listen(port, () => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  })
})

app.use(cors(options))
routerApi(app)
app.use(logError)
app.use(boomErrorHandler)
app.use(errorHandler)





