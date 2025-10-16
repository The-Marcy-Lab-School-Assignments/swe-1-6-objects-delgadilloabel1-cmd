const coolGreeting = (person) => {
  return person.isCool ? `What is UP ${person.name.toUpperCase()}? How you been doin'?` : `Greetings ${person.name}, how have you been lately?`
};

const haveBirthday = (person) => {
  console.log(person.age++);
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name
  person['spyHandle'] = spyHandle
};

const carMaker = (name, maker, year) => {
  const car = {
    name,
    maker,
    year,
    needsOilChange: false,
  }

  return car
};

const weAreNotFriends = (person) => {
  return person.friends.pop()

};

const listHobbies = (person) => {
  console.log(`${person.name} likes ${person.hobbies[0]}.`);
  console.log(`${person.name} likes ${person.hobbies[1]}.`);
  console.log(`${person.name} likes ${person.hobbies[2]}.`);
};

const getNextOpponent = (team) => {
  if (team.matches.length === 0) {
    return null
  } else {
    return team.matches[0]["teamName"]
  }
};

const listAllKeys = (obj) => {
  const keys = Object.keys(obj)
  return keys
};

const listAllValues = (obj) => {
  const values = Object.values(obj)
  return values
};

const convertToMatrix = (obj) => {
  const arr = []
  if (obj.length === 0) {
    return []
  } else {
    const keys = Object.keys(obj[0])
    arr.push(keys)
    for (let i = 0; i < obj.length; i++) {
      const values = Object.values(obj[i])
      arr.push(values)
    }
  }
  return arr
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
