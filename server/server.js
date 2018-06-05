var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');
var _ = require('lodash');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({ todo });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({ todo });
  }, (e) => res.status(400).send());
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;   //getting the id
  var body = _.pick(req.body, ['text', 'completed']);//we define body as a subset of the things that the user will pass to us
  //we dont want the user to be able to change all the fields in that object  

  if (!ObjectID.isValid(id)) {  // checking if the id is valid
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {//update the completedAt property based on the completed property

    body.completedAt = new Date().getTime();

  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {//its like what we wrote in mongoDb-update file and we replaced returnOriginal = false with new =true
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }, (e) => res.status(400).send());
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = { app };
