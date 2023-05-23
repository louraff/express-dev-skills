const skills = [
    {
      id: 1,
      name: "JavaScript",
      expertise: "Advanced",
      yearsExperience: 5,
      currentlyUsing: true
    },
    {
      id: 2,
      name: "Python",
      expertise: "Intermediate",
      yearsExperience: 3,
      currentlyUsing: true
    },
    {
      id: 3,
      name: "Java",
      expertise: "Beginner",
      yearsExperience: 2,
      currentlyUsing: false
    },
    {
      id: 4,
      name: "React.js",
      expertise: "Advanced",
      yearsExperience: 4,
      currentlyUsing: true
    },
    {
      id: 5,
      name: "Angular.js",
      expertise: "Intermediate",
      yearsExperience: 2,
      currentlyUsing: false
    },
    {
      id: 6,
      name: "Node.js",
      expertise: "Advanced",
      yearsExperience: 3,
      currentlyUsing: true
    }
  ]
  

  function getAll() {
    return skills
  }

  function getOne(id) {
    id = parseInt(id)
    console.log('ID in getOne:', id)
    console.log('Skills in getOne:', skills)
    return skills.find(skill => skill.id === id)
}

  function createSkill(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skills.push(skill);
    console.log(skills)
  }

  function updateSkill(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill)
  }

  function deleteOne(id){
    id = parseInt(id)
    const idx= skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

  module.exports = {
    getAll,
    getOne,
    create: createSkill, 
    update:  updateSkill, 
    deleteOne
  }