const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b1004db7061ff519433a7b8')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b0d7d980daf5e5b9c0c0174')
    }, {
        $set: {
            name: 'Ahmad'
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });
    // db.close();
});