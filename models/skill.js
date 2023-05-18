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
  


  module.exports = {
    getAll,
    getOne
  }

  function getAll() {
    return skills
  }

  function getOne(id) {
    id = parseInt(id)
    return skills.find(skills => skills.id === id)
  }