const cors = require('cors');
const express = require('express');
const app= express()


var admin = require("firebase-admin");

var serviceAccount = require("./gerardvalldosera-74fd7-firebase-adminsdk-fitd2-8bab1a8f8d.json");
const {getFirestore} = require("firebase-admin/firestore");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = getFirestore();


app.use(express.json());


app.use(cors());

port = 3000;

app.listen(port,() => {
    console.log('Server listening on the port ::'+ port);
});