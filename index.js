const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://lexkorn:1q2w3e4r@cluster0.xm1u3.mongodb.net/todos',      
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    );
    // await mongoose.connect(
    //   'mongodb+srv://lexkorn:1q2w3e4r@cluster0.xm1u3.mongodb.net/vacancy',
    //   {
    //     useNewUrlParser: true,
    //     useFindAndModify: false
    //   }
    // );

    app.listen(PORT, () => {
      console.log('Server has been started...')
    });
  } catch (err) {
    console.log(err);
  }
}

start()