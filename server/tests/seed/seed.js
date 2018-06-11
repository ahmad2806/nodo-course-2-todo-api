
const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const jwt = require('jsonwebtoken');
const { ObjectID } = require('mongodb')


const userTwoId = new ObjectID();
const userOneId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'ahmadhashem2806@gmail.com',
  password: 'One123456abc',
  tokens: [{
    access: 'auth',
    token: jwt.sign({ _id: userOneId, access: 'auth' }, 'secret').toString()
  }]
}, {
  _id: userTwoId,
  email: 'mohammad@exmple.com',
  password: 'Two123456abc',
  tokens: [{
    access: 'auth',
    token: jwt.sign({ _id: userTwoId, access: 'auth' }, 'secret').toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator : userOneId
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333,
  _creator : userTwoId
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};
const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne,userTwo])
  }).then(() => done());
};

module.exports = {
  todos,
  populateTodos,
  users, 
  populateUsers
}