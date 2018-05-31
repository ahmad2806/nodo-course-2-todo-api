const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server')
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to Insert Todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.collection('Users').insertOne({
        age: 24,
        name: 'Ahmad',
        location: 'jerusalem' 
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert to DB');
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });
    db.close();
});