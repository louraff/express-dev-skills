const {getAll, getOne} = require('../models/skill')

function index(req, res, next) {
    res.render('skills/index', {skills: getAll()})
}

function show(req, res, next) {
    const {id} = req.params
    console.log(getOne(id))
    res.render('skills/show', {skill: getOne(id)})
}

module.exports = {
    index, 
    show
}