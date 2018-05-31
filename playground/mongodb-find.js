const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server')
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b0ffab6ef664a1948d0d349')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('erro')
    // });

    // db.collection('Todos').find({
    // }).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('erro')
    // });
    db.collection('Users').find({name: 'Ahmad'}).toArray().then((docs) => {
        console.log(`Users with name`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('error while fetching');
    });


    db.collection('Users').find({name: 'Ahmad'
    }).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('erro')
    });
    db.close();
});