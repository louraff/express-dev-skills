const {getAll, getOne, create: createSkill, update: updateSkill, deleteOne} = require('../models/skill')

module.exports = {
    index, 
    show,
    new: newSkill,
    create, 
    update, 
    delete: deleteTodo
}

function deleteTodo(req, res) {
    deleteOne(req.params.id)
    res.redirect('/skills')
}

function update(req, res) {
    console.log(req.params.id, req.body)
    updateSkill(req.params.id, req.body.skill)
    res.redirect(`/skills/${req.params.id}`)
  }

function create(req, res) {
    console.log({...req.body});
    // Models are responible for CRUD'ing the data
    createSkill(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
  }

function newSkill(req, res) { 
  res.render('skills/new', { 
    title: 'New Skill'
  });
}

function index(req, res, next) {
    res.render('skills/index', {
        skills: getAll()
    })
}

function show(req, res) {
    const {id} = req.params
    console.log('ID in show:', id)
    console.log('getOne in show:', getOne(id))
    res.render('skills/show', {skill: getOne(id)})
}

