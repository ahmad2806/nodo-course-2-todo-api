const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server')
    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Something to do' }).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Todos').deleteOne({ text: 'Something to do' }).then((result) => {
    //     console.log(result);
    // });
    // // db.close();
    db.collection('Users').deleteMany({ name: 'Ahmad' }).then((result) => {
        console.log(result);
    });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b1000f0502687194801d96a') }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    // db.close();
});