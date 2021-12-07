
const express = require('express');
const mongoose = require('mongoose');
const AuthRouter = require('./modules/auth');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/sos-map');

    console.log('Mongodb connected');

    const app = express();
    app.use(express.json());

    app.use('/api/auth', AuthRouter);

    app.listen(9000, (err) => {
        if(err) throw err;

        console.log('Server connected');
    })
}

main();