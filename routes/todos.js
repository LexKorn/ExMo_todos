const { Router } = require('express');
const Todo = require('../models/Todo');
const Vacancy = require('../models/vacancy')
const router = Router();

router.get('/', async (req, res) => {
  const todos = await Todo.find({})

  res.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  })
})

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title
  })

  await todo.save()
  res.redirect('/')
})

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id)

  todo.completed = !!req.body.completed
  await todo.save()

  res.redirect('/')
})



router.get('/vacancy', async (req, res) => {
  const vacancys = await Vacancy.find({});

  res.render('vacancy', {
    title: 'Vacancy',
    isVacancy: true,
    vacancys
  });
});


router.get('/addvacancy', (req, res) => {
  res.render('addvacancy', {
    title: 'Add vacancy',
    isAddVacancy: true
  });
});

router.post('/addvacancy', async (req, res) => {
  const todo = new Vacancy({
    title: req.body.title,
    description: req.body.description
  })

  await todo.save()
  res.redirect('/vacancy')
})


module.exports = router