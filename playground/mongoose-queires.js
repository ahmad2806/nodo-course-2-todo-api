const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5b151342394fb8f84fe960261';

// if(!ObjectID.isValid(id)) {
//    return console.log('ID not Valid')
// }

// Todo.find({
//     _id: id
// }).then( (todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     completed: false
// }).then( (todo) => {
//     console.log('\nTodo\n',todo)
// });

// Todo.findById(id).then( (todo) => {
//     if(!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo by id',todo)
// }).catch((e) => console.log(e));

var userID = '5b13e9e7e9beb3fc413d6393';

User.findById(userID).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User found By ID ',JSON.stringify(user, undefined, 2))
}).catch( (e) => console.log(e));